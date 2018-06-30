// Require modules
const fs = require('fs');
const path = require('path');
const mongodb = require('mongodb');
const winston = require('winston');
const async = require('async');

// load configuration file
global.config = require('./utils/config.js');
global.logger = require('./utils/logger.js').logger;

// banner display
require('./utils/banner.js');

// read the segment size
var psize = parseInt(process.argv[2]) || config.general.def_size;

logger.info(`configurations loaded: ${ JSON.stringify(config, null, 2) }`);

logger.info({message: `page size sent ${psize}`});

// read the files contents
const customers = require(path.join(__dirname, config.data.dir, config.data.customers));
const addresses = require(path.join(__dirname, config.data.dir,  config.data.addresses));

let tasks = [];

mongodb.MongoClient.connect(config.db.url, (error, client) => {
    if(error) return process.exit(1);

    var db = client.db(config.db.dbname);

    customers.forEach((customer, index, list) => {
        customers[index] = Object.assign(customer, addresses[index]);

        if(index % psize == 0) {
            const start = index;
            const end = (start + psize > customers.length) ? customers.length - 1: start + psize;

            tasks.push( (done) => {
                logger.info(`Processing ${start}-${end} out of ${customers.length}`);
                db.collection(config.db.collect).insert(customers.slice(start, end), (error, result) => {
                    done(error, result);
                });
            });
        }
    });

    logger.info(`Launching ${tasks.length} parrallel tasks(s)`);
    const startTime = Date.now();
    async.parallel(tasks, (error, results) => {
        if(error) logger.log(logger.levels.error, error);

        const endTime = Date.now();
        logger.info(`Execution time: ${endTime - startTime}ms`);
        logger.info(`Execution ended successfully\n`);
        client.close();
    });
});

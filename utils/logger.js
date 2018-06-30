const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const path = require('path');
const fs = require('fs');
const config = require('./config.js');

const logFormat = printf(info => { return `${ info.timestamp } [${ info.level.toUpperCase() }]: ${ info.message }`; });

var logger = createLogger({ 
    level: config.logger.level, 
    format: combine(timestamp(), logFormat),
    transports: [
        new transports.Console(),
        new transports.File({ stream: fs.createWriteStream(config.logger.dir + config.logger.filename, { flags: 'a' }), options: { encoding: 'utf-8'}})
//        new transports.File({ filename: config.logger.dir + config.logger.filename, options: { encoding: 'utf-8' } })
    ]
});



module.exports = { logger };

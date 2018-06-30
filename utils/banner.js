const fs = require('fs');

// Display banner
var banner = fs.readFileSync(config.general.banner, 'utf-8');

console.log('----------------------------------------------------------------------------------------------');
console.log(banner);
console.log('----------------------------------------------------------------------------------------------');
console.log();
logger.info('Welcome to MongoJS Migration Assignment');
console.log();



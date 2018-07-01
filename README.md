# Mongo Data Migration Assignment

This is my assignment submission to Module 3 of NodeJS course, which is a simple data merge and migration tool, which reads data from two files provided in the ```data\``` folder, and insert them into mongo DB, in batches that is provided in the command line while stating the project (as provided in the Usage section).

The application is implemented mainly in the ```server.js``` script, which contains the main functions of the application, however, some modules are contained in separate files, such as banner display, logger, and configuration modules, and they can be found in the ```utils``` folder.

## Requirements

1. MongoDB installed and started and working with no username or password on localhost machine on port 27017, mongo URL can be changed using the configuration file (refer to Configuration section below).
2. Database named ```edx-course-db``` be created on MongoDb installation.

### Data

Data is provided locally in the ```data\``` folder, in two files as follows:

1. m3-customer-data.json - containing all customer data.
2. m3-customer-address.json - containing all customer addresses and phone numbers.

data directory and filenames can be configured using the ```utils/config.js``` file, which contains all application configuration used throughout the application, and for further configuration information refer to the Configuration section below.

### Database

Database used is MongoDB, which should be installed and started on the localhost server, running o default port of 270017, which has a connection string of ```mongodb://localhost:27017```, with no username or password that should be provided.

A database might be required to be created with the name ```edx-course.db```.

## Installation

1. Clone the repository using 

```
git clone https://github.com/airaqi/mongo-migrate.git
```

2. Install node modules
```
npm install
```


## Usage

After fulfilling all requirements, and installing the application properly, you can run the application using 
```
npm start <page_size>
```

### Configuration

System configurations are all saved in ```utils/config.js``` file, which contains the following keys:

Title | Key | Descrition|Default
----|-------|-----------|--------
__1. General__ | general | Contains general configurations such as banner and default page size|
Default page size | general.def_size | default page size which will be used to partition the data. |100
Banner file name | general.banner | into banner filename and location.| ./utils/banner.txt
__2. Data__ | data | Provided data configurations|
Data Directory | data.dir | Location of data folder | ./data/
Customers data | data.customers | customers data filename. | m3-customer-data.json
Addresses data | data.addresses | customers' addresses filename. | m3-customer-address-data.json
__3. Database__ | db | Database configurations|
URL | db.url | Database connection string | mongodb://localhost:27017
Database Name | db.dbname | name of the database name | edx-course-db
Collection name | db.collect | name of collection used to use to save the results | customers
Authentication user | db.username | username used to loging to MongoDB (Not implemented yet) | _Not implemented yet_
Authentication password | db.password | password to be used in logging in (Not implemented yet | _Not implemented yet_
__4. Logs__ | logger | Logger settings
Logging Directory | logger.dir | Logging output directory | ./log/
Filename | logger.filename | Logs output filename. | mongojs.log
Log level | logger.level | Log level used in logging. | info

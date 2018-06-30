# Mongo Date Migration Assignment

This is my assignment submission to Module 3 of NodeJS course, which is a simple data merge and migration tool, which reads data from two files provided in the ```data\``` folder, and insert them into mongo DB, in batches that is provided in the command line while stating the project (as provided in the Usage section).

The application is implemented mainly in the ```server.js``` script, which contains the main functions of the application, however, some modules are contained in separate files, such as banner display, logger, and configuration modules, and they can be found in the ```utils``` folder.

## Requirements

1. MongoDB installed and started and working with no username or password, and on port 27017, on the localhost machine.
2. Database named edx-course-db be created on MongoDb installation.

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

System configurations are all saved in ```utils/config.js``` file, which is partitioned as follows:

1. General  contains the banner info.
    * Default Size 
2. Data     contains the data files directory and file names
3. Database contians all the database configurations
4. Logger   all logger configurations 

<dl>
    <DT>1. General (general)<DD>banner and default size.
        * Default Size (def_size)
        * banner file (banner)
    <DT>2. Data (data)<DD>contains the data files directory and file names.
    <DT>3. Database (db) <DD>contains all the database configurations
    <dt>4. Logger (logger) <DD>all logger configurations.
</dl>

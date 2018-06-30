module.exports = {
    general: {
        banner: './utils/banner.txt',
        def_size: 1000
    },
    data: {
        dir: './data/',
        customers: 'm3-customer-data.json',
        addresses: 'm3-customer-address-data.json'
    },
    db: {
        url: "mongodb://localhost:27017",
        dbname: "edx-course-db",
        collect: "customers",
        username: '',
        password: ''
    },
   
    logger: {
      dir: 'log/',
      filename: 'mongojs.log',
      level: 'info'  
    } 
     
};

module.exports = {
    general: {
        banner: './utils/banner.txt',
        def_size: 1000
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

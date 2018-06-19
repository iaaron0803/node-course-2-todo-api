var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test'){
    var config = require('./config.json');
    var envConfig = config[env];
    
    Object.keys(envConfig).forEach((key)=>{
        process.env[key] = envConfig[key];
    });
}

// if(env === 'development'){
//     process.env.PORT = 8080;
//     process.env.MONGODB_URI = 'mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db';
// }else if(env === 'test'){
//     process.env.PORT = 8080;
//     process.env.MONGODB_URI = 'mongodb://user:aaron7662@ds159100.mlab.com:59100/node-db-test';
// }
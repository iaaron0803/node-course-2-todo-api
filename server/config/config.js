var env = process.env.NODE_ENV || 'development';

if(env === 'development'){
    process.env.MONGODB_URI = 'mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db';
}else if(env === 'test'){
    process.env.MONGODB_URI = 'mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db-test';
}
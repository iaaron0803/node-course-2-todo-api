var mongoose = require("mongoose");

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://user:aaron7662@ds161574.mlab.com:61574/node-db');

module.exports ={mongoose};
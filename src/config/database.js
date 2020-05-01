const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/FI-Million';

mongoose.connect(uri,  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false });
    
mongoose.Promise = global.Promise;

module.exports = mongoose; 
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost//demo_signIn');

const db = mongoose.connection;

db.on('error',console.error.bind('console','Error while creating database'));
db.once('open',function(err){
    if(err){
        console.log('error while opening the database');
    return;
    }
    console.log('Successfully connected to Database');
    return;
}
    )
module.exports = db;

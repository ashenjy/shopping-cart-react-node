const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, 
    { useCreateIndex: true, 
        useNewUrlParser: true,
        useUnifiedTopology: true});

module.exports = {
    User: require('../users/user.model')
};
const mongoose = require('mongoose');
const CONNECTION_STRING = process.env.CONNECTION_STRING;

async function initDatabase(){
    await mongoose.connect(CONNECTION_STRING);
}

module.exports = initDatabase;
const mongoose = require('mongoose');

// create a model that will help us to interact with the DB
// Define a schema
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedToChannel: {
        type: String,
        required: true,
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }

})

// This model allows to interact directly with the database
// First parameter is the name of the model in the db
// Second is the schema model
module.exports = mongoose.model('Subscriber', subscriberSchema);
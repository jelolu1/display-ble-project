const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber');

// Create routes
// Getting All 
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message }); // 500: Fail of our server
    }
})

// Getting One
// writing : indicates that id is a parameter that we can use with req.params
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber);
})


// Creating One
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel,
    });
    try {
        const newSubscriber = await subscriber.save(); // Create object
        res.status(201).json(newSubscriber); // 201: Success creating something
    } catch (err) {
        res.status(400).json({ message: err.message }); // 400: Fail if the user pass bad data

    }
})


// Updating One
router.patch('/:id', getSubscriber, async (req, res) => {

    if (req.body.name != null) {
        res.subscriber.name = req.body.name;
    }
    if (req.body.subscribedToChannel != null) {
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
    }
    try {
        const updatedSubscriber = await res.subscriber.save();
        res.json(updatedSubscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


// Deleting One 
router.delete('/:id', getSubscriber, async (req, res) => {

    try {
        await res.subscriber.remove()
        res.send({ message: 'Deleted Subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


async function getSubscriber(req, res, next) {
    // if we call next -> move to the next section of the code
    let subscriber;
    try {
        subscriber = await Subscriber.findById(req.params.id);
        if (subscriber == null)
            return res.status(404).json({ message: 'Cannot find subscriber' })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    // This value will be shared by get 1 user, patch, delete
    res.subscriber = subscriber;
    next(); // When this function reaches this point, it continues to the next function in router.get, router.delete or router.patch
}

module.exports = router;
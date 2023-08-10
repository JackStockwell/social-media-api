const router = require('express').Router()

const thoughtController = require('../../controllers/thought-controller')

router
    .route('/')
        .get(thoughtController.getThoughts)
        .post(thoughtController.newThought)

router
    .route('/:thoughtId')
        .get()

module.exports = router;

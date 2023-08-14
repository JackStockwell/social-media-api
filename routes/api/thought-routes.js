const router = require('express').Router()

const thoughtController = require('../../controllers/thought-controller')

router
    .route('/')
        .get(thoughtController.getThoughts)
        .post(thoughtController.newThought);

router
    .route('/:id')
        .get(thoughtController.getThoughtSingle)
        .put(thoughtController.updateThought)
        .delete(thoughtController.deleteThought);
router
    .route('/:thoughtID/reactions')
        .post(thoughtController.reactionAdd)
        .delete(thoughtController.reactionDelete);

module.exports = router;

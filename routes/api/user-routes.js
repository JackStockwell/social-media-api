const router = require('express').Router();

const userController = require('../../controllers/user-controller')

router
    .route('/')
        .get(userController.getUsers)
        .post(userController.newUser);
router
    .route('/:id')
        .get(userController.getUserSingle)
        .put(userController.updateUser)
        .delete(userController.deleteUser);

module.exports = router;

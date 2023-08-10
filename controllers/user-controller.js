const { Thought, User, } = require('../models')

const userController = {
    async getUsers (req, res) {
        try {
            const userData = await User.find()

            res.status(200).json(userData)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}

module.exports = userController;
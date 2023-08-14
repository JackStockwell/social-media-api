const { Thought, User, } = require('../models')

const userController = {
    // Finds all users
    // GET '/'
    async getUsers (req, res) {
        try {
            // Finds all users
            const userData = await User
                .find({})
                .select('-__v')
                .populate('thoughts')

            res.status(200).json(userData)
            return
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    // Get a single user.
    // GET '/:id'
    async getUserSingle (req, res) {
        try {

            const userData = await User
                .findOne({_id: req.params.id})
                .select('-__v')
                .populate('thoughts')

            // Validation check, ensures that a valid id was found/parsed.
            if (!userData) {
                res
                    .status(404)
                    .json({
                        message: "No user found with that ID!"
                    })
                return
            }

            res.status(200).json(userData)
            return

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Create a new user
    // POST '/'
    async newUser (req, res) {
        try {

            // Creates a new user.
            const userData = await User.create(req.body)

            // Validation check, ensures that a valid id was found/parsed.
            if (!userData) {
                res
                    .status(404)
                    .json({
                        message: "Incorrect/missing data! Ensure an Email and Username are set."
                    })
                return
            }

            res.status(200).json(userData)
            return

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Update a user's details.
    // PUT '/:id'
    async updateUser (req, res) {
        try {

            // Finds the user, updates their infomation.
            const userData = await User.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {runValidators: true, new: true}
            )

            if (!userData) {
                res
                    .status(404)
                    .json({
                        message: "No user found with that ID!"
                    })
                return
            }
            
            res.status(200).json(userData)
            return
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Delete a user and their thoughts.
    // DELETE '/:id'
    async deleteUser (req, res) {
        try {

            const userData = await User.findOne(
                {_id: req.params.id}
            )

            if (!userData) {
                res
                    .status(404)
                    .json({
                        message: "No user found with that ID!"
                    })
                return
            }

            await Thought.deleteMany(
                {username: userData.username}
            )

            await User.deleteOne(
                {_id: req.params.id}
            )

            res.status(200).json({
                message: `User and their thoughts forgotten from the Database!`
            })
            return
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // FRIEND ROUTES

    // Add a new friend to a user's friend list.
    // POST '/:userID/friends/:friendID'
    async friendUser (req, res) {
        try {

            const friendData = await User.findOne(
                {_id: req.params.friendID}
            )

            const userData = await User.findOneAndUpdate(
                {_id: req.params.userID},
                {$addToSet: {friends: friendData._id}},
                {new: true}
            )
            
            // Ensures both friend and user ids are correct.
            if (!userData || !friendData) {
                res
                    .status(404)
                    .json({
                        message: "No user(s) found with that ID! Ensure both IDs are valid!"
                    })
                return
            }

            res.status(200).json(userData)
            return
            

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Remove a friend for the their friend list.
    // DELETE '/:userID/friends/:friendID'
    async friendRemove (req, res) {
        try {

            const friendData = await User.findOne(
                {_id: req.params.friendID}
            )

            const userData = await User.updateOne(
                {_id: req.params.userID},
                {$pull: {friends: friendData._id}},
                {new: true}
            )

            // Ensures both friend and user ids are correct.
            if (!userData || !friendData) {
                res
                    .status(404)
                    .json({
                        message: "No user(s) found with that ID! Ensure both IDs are valid!"
                    })
                return
            }

            res.status(200).json({
                message: "Users are no longer friends :("
            })
            return
            
            
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }
    
}

module.exports = userController;
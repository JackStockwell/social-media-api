const { Thought, User } = require('../models')


const thoughtController = {

    // Get all thoughts from the API
    // GET '/'
    async getThoughts (req, res) {
        try {
            const thoughtData = await Thought.find()

            res.status(200).json(thoughtData)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Get one thought from the API by id in req.params
    // GET '/:id
    async getThoughtSingle(req, res) {
        try {

            // Find thought with id.
            const thoughtData = await Thought.findOne(
                {_id: req.params.id}
            )
            
            // Validation check, ensures that a valid id was found/parsed.
            if (!thoughtData) {
                res.status(404)
                    .json({
                        message: "No thought post with that ID was found!"
                    })
                return
            }

            res.status(200).json(thoughtData)
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Create a new thought
    // POST '/'
    async newThought(req, res) {
        try {
            // Creates the thought.
            const thoughtData = await Thought.create(req.body);

            // Finds the user that made the thought and updates the users thoughts documents.
            await User.findOneAndUpdate(
                {_id: req.body.userID },
                {$addToSet: {thoughts: thoughtData._id}},
                {new: true}
            )
            
            // Validation check, ensures that a valid id was found/parsed.
            if (!thoughtData) {
                res.status(404)
                    .json({
                        message: "No thought post with that ID was found!"
                    })
                return
            }

            res.status(200).json({
                message: "New post created!"
            })

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },
    
    // Update a thought.
    // PUT '/:id'
    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.id},
                {$set: req.body},
                {runValidators: true, new: true}
            )
            
            // Validation check, ensures that a valid id was found/parsed.
            if (!thoughtData) {
                res.status(404)
                    .json({
                        message: "No thought post with that ID was found!"
                    })
                return
            }

            res.status(200)
                .json({
                    message: "Successfully update thought post!"
                })
        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    },

    // Delete a thought and update the subdocuments.
    // DELETE '/:id' 
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete(
                {_id: req.params.id}
            )

            // Validation check, ensures that a valid id was found/parsed.
            if (!thoughtData) {
                res.status(404)
                    .json({
                        message: "No thought post with that ID was found!"
                    })
                return
            }

            res
                .status(200)
                .json({
                    message: "Successfully deleted thought post!"
                })

        } catch (err) {
            console.error(err)
            res.status(500).json(err)
        }
    }
}

module.exports = thoughtController;
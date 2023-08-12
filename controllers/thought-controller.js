const { Thought, User } = require('../models')

const thoughtController = {

    // Get all thoughts from the API
    async getThoughts (req, res) {
        try {
            const thoughtData = await Thought.find()

            res.status(200).json(thoughtData)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Get one thought from the API by id in req.params
    async getThoughtSingle(req, res) {
        try {

            const thoughtData = await Thought.findOne({
                _id: req.params.thoughtID
            })

            if (!thoughtData) {
                res.statusMessage = "No thought found with that ID!"
                res.status(404)
                return
            }

            res.status(200).json(thoughtData)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async newThought(req, res) {
        try {
            const thoughtData = await Thought.create(req.body);

            const userData = await User.findOneAndUpdate(
                {_id: req.body.userID },
                {$addToSet: {thoughts: thoughtData._id}},
                {new: true}
            )

            if (!userData) {
                res
                    .status(404)
                    .json({message: "No user was found with that ID."})
            }


        } catch (err) {
            res.status(500).json(err)
        }
    },

    async updateThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.userID},
                {$set: 
                    {thoughtText: req.body}
                }
            )
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = thoughtController;
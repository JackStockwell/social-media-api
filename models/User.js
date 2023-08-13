const { Schema, model } = require('mongoose');

const validEmail = (email) => {
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return reg.test(email)
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [
                validEmail,
                "You must enter a valid email!"
            ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

const User = model('user', userSchema);

module.exports = User;
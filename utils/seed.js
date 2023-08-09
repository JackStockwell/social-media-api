const connection = require('../config/connection')
// const { Thought, User } = require('../models')
const { getRandomThought, getRandomUser } = require('./data')


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected')
    
    let userCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users')
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts'}).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts')
    }

    let users = []

    for (let i = 0; i < 5; i++) {
        const username = getRandomUser()
        const thought = getRandomThought()

        users.push({
            username
        })
    }

})

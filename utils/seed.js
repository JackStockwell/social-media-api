const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { Thought, User } = require('../models')
const { getRandomThought, getRandomUser } = require('./data')


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected')
    
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    console.log(userCheck.length)
    if (userCheck.length) {
        console.log(`Users collection detected, dropping users...`)
        await connection.dropCollection('users')
    }

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        console.log(`Thoughts collection detected, dropping users...`)
        await connection.dropCollection('thoughts')
    }

    let users = []
    let thoughts = []

    for (let i = 0; i < 5; i++) {
        const username = getRandomUser(i)
        const email = `${username}@mail.com`


        users.push({
            username,
            email,
        })
    }

    for (let i = 0; i < 5; i++) {

    }

    const userData = await User.collection.insertMany(users)

    const user = await User.collection.findOne({})


    console.log(userData.insertedIds)
    console.info('Seeding complete! 🌱');
    process.exit(0);
})

const thoughts = [
    "I had a thought today",
    "Thinking about you...",
    "I've been thoughted",
    "Too many thoughts, too little time",
    "Thoughting of you too..."
]

const randomizer = (arr) => arr[Math.floor(Math.random() * arr.length)]

const getRandomUser = () => `${randomizer(users)}`
const getRandomThought = () => `${randomizer(thoughts)}`

module.exports = { getRandomThought, getRandomUser}
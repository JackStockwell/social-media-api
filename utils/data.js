const getRandomUser = (i) => {

    const users = [
        "teaandbiscuits",
        "gibbous",
        "cokebottle420",
        "gistah",
        "CoolingBreeze"
    ]

    return users[i]

}
const getRandomThought = (i) => {
    const thoughts = [
        "I had a thought today",
        "Thinking about you...",
        "I've been thoughted",
        "Too many thoughts, too little time",
        "Thoughting of you too..."
    ]

    return [i]
}

module.exports = { getRandomThought, getRandomUser}
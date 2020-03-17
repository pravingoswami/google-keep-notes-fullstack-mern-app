const mongoose = require('mongoose')


const setupDB = () => {
    mongoose.connect('mongodb+srv://pravingoswami:MongoDB@cluster0-uhdbe.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to the database')
        })
        .catch(err => console.log(err))
}

module.exports = setupDB
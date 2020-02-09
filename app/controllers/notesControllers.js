const Note = require('../models/note')
const pick = require('lodash/pick')

module.exports.list = (req, res) => {
    Note.find({user : req.user._id})
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports.create = (req, res) => {
    console.log(req.body.noteImage)
    const body = pick(req.body, ['title', "description", 'noteImage', 'category'])
    // console.log(body)

    const note = new Note(body)

    note.user = req.user._id
    console.log(note)
    note.save()
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Note.findOne({_id : id, user : req.user._id})
        .then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findOneAndUpdate({_id : id, user : req.user._id}, body, {new : true, runValidators : true})
        ,then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    console.log(id)
    Note.findOneAndDelete({_id : id, user : req.user._id})
        .then(note => note ? res.json(note) : res.json({}))
        .catch(err => res.json(err))
}
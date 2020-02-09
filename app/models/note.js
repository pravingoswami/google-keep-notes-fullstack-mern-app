const mongoose = require('mongoose')
const multer = require('multer')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    noteImage : {
        type : String
    },
    category:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    },
    user : {
        type : mongoose.Schema.Types.ObjectId
    },
    color : {
        type : String,
    },
    pinned : {
        type : Boolean,
        default : false
    },
    archived : {
        type : Boolean,
        default : false
    },
    bin : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

// noteSchema.pre('save',function(req, res, next){
//     const note = this
//     console.log('hiii')
//     if(note.noteImage){
//         console.log('note image is available')

//         const storage = multer.diskStorage({
//         destination : function(req, file, cb){
//             cb(null, './uploads/')
//         },
//         filename : function(req, file, cb){
//             cb(null, file.originalname)
//         }
//     })

//         const upload = multer({storage : storage})
//         upload.single('noteImage')
//         note.noteImage = req.file.path
//         console.log(note)
//         next()
//     } else {
//         next()
//     }
  
// })


const Note = mongoose.model('Note', noteSchema)

module.exports = Note
const multer = require('multer')

const MulterImage = (req, res, next) => {
        console.log('file',req.file)
        console.log('whole data', req.body)

        const storage = multer.diskStorage({
                destination : function(req, file, cb){
                    cb(null, './uploads/')
                },
                filename : function(req, file, cb){
                    cb(null, file.originalname)
                }
            })

            const upload = multer({storage : storage})

        next()
}

module.exports = MulterImage
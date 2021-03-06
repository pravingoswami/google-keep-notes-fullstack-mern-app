const express = require('express')
const usersControllers = require('../app/controllers/usersControllers')
const notesControllers = require('../app/controllers/notesControllers')
const categoriesControllers = require('../app/controllers/categoriesControllers')

const authenticateUser = require('../app/middleware/authenticateUser')
const multer = require('multer')

const router = express.Router()

router.get('/users/info', usersControllers.list)
router.post('/users/register', usersControllers.register)
router.post('/users/login', usersControllers.login)
router.get('/users/account',authenticateUser, usersControllers.account)
router.delete('/users/logout',authenticateUser, usersControllers.logout)
router.delete('/users/destroy/:id', usersControllers.destroy)

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage : storage})
router.get('/notes', authenticateUser, notesControllers.list)
router.get('/notes', authenticateUser, notesControllers.list)
router.post('/notes', authenticateUser, upload.single('noteImage') , notesControllers.create)
router.get('/notes/:id', authenticateUser, notesControllers.show)
router.put('/notes/:id', authenticateUser,  upload.single('noteImage'), notesControllers.update)
router.delete('/notes/:id', authenticateUser, notesControllers.destroy)
// router.get('/notes/info',notesControllers.info)

router.get('/categories', authenticateUser, categoriesControllers.list)
router.post('/categories', authenticateUser, categoriesControllers.create)
router.get('/categories/:id', authenticateUser, categoriesControllers.show)
router.put('/categories/:id', authenticateUser, categoriesControllers.update)
router.delete('/categories/:id', authenticateUser, categoriesControllers.destroy)
// router.get('/categories/info',categoriesControllers.info)


module.exports = router
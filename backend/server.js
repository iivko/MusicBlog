const jsonServer = require('json-server')
const multer = require('multer')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        let date = new Date()
        let imageFilename = date.getTime() + "_" + file.originalname
        req.body.image = imageFilename
        cb(null, imageFilename)
    }
})

const bodyParser = multer({ storage: storage }).any()


server.use(bodyParser)
server.post("/posts", (req, res, next) => {
    let date = new Date()
    req.body.created_at = date.toISOString()

    let hasErrors = false
    let errors = {}

    if (req.body.title.length < 2) {
        hasErrors = true
        errors.title = "The title length should be at least 2 characters."
    }
    
    if (req.body.description.length < 2) {
        hasErrors = true
        errors.description = "The description length should be at least 2 characters."
    }

    if (req.body.genre.length < 2) {
        hasErrors = true
        errors.genre = "The genre length should be at least 2 characters."
    }

    if (req.body.music_star.length < 2) {
        hasErrors = true
        errors.music_star = "The music star length should be at least 2 characters."
    }

    if (hasErrors) {
        res.status(400).jsonp(errors)
        return
    }

    // Continue to JSON Server router
    next()
})

// Use default router
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
    console.log('http://localhost:3000')
})
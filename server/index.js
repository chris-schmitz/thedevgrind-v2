let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let multer = require('multer')
let upload = multer()
let jwt = require('jsonwebtoken')


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Refactor to use mongoose instead of mongodb
let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let ObjectId = require('mongodb').ObjectID
let url = 'mongodb://localhost:27017/pages'
let co = require('co')

// Break all of this craziness out into separate files!

function dbConnect(){
    return MongoClient.connect('mongodb://127.0.0.1/thedevgrind')
}

vocab = {
    errorMessageWhenFailingTo:{
        update: 'There was an error updating the page.'
    },
    successMessageWhenPerformingA:{
        update: 'Update successful.'
    }
}

app.get('/', function (req,res){
    res.sendFile('../public/index.html')
})

app.post('/pages', (req,res) => {
    co(function*(){
        let db = yield MongoClient.connect('mongodb://127.0.0.1/thedevgrind')
        let pages = [
            {page: 'about', content: '# About', image: "https://placebear.com/400/400"},
            {page: 'contact', content: '# Contact', image: "https://placebear.com/400/400"},
        ]
        let result = yield db.collection('pages').insertMany(pages)
        console.log(result)
        db.close()
        res.send('worked from co')
    })
})

app.get('/pages', (req, res) => {
    co(function*(){
        let db = yield dbConnect()
        let pages = yield db.collection('pages').find().toArray()
        db.close()
        res.json(pages)
    })
})

app.put('/about', function (req,res){
    co(function*(){
        let db = yield dbConnect()
        let updated = yield db.collection('pages')
                                .update(
                                    {page: 'about'},
                                    {$set: {content: req.body.content}},
                                    {upsert: true}
                                )
        db.close()
        if(updated.result.ok !== 1){
            res.status(500).json({message: vocab.errorMessageWhenFailingTo.update})
        }
        res.json({message: vocab.successMessageWhenPerformingA.update})
    })
})

app.put('/contact', (req,res) => {
    console.log('here')
    co(function*(){
        let db = yield dbConnect()
        let updated = yield db.collection('pages')
                                .update(
                                    {page: 'contact'},
                                    {$set: {'content': req.body.content}},
                                    {upsert: true}
                                )
        db.close()
        if(updated.result.ok !== 1){
            res.status(500).json({message: vocab.errorMessageWhenFailingTo.update})
        }
        res.json({message: vocab.successMessageWhenPerformingA.update})
    })
})

let apiRoutes = express.Router()

apiRoutes.post('/authenticate', (req,res) => {
    // get user from req.body
    // look up user in schema
    let foundUser = {};

    if(foundUser.password !== req.body.password)

    // - if there was an error finding the user -> return error
    // - if the user doesn't exist -> return error
    // - if the user's password doesn't match req password-> return error

    res.json({message: 'placeholder for auth page'})
})
apiRoutes.post('/verifytoken', (req,res) => {
    res.json({message: 'placeholder for jwt token verification'})
})
apiRoutes.post('/logout', (req,res) => {
    res.json({message: 'placeholder for logout'})
})

app.use(apiRoutes)

app.listen(3001, function (){
    console.log('listening on http://localhost:3001')
})

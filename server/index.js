let express = require('express')
let app = express()
app.use(express.static('public'))

let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let ObjectId = require('mongodb').ObjectID
let url = 'mongodb://localhost:27017/pages'
let co = require('co')



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
        let db = yield MongoClient.connect('mongodb://127.0.0.1/thedevgrind')
        let pages = yield db.collection('pages').find().toArray()
        db.close()
        res.json(pages)
    })
})

app.post('/about', function (req,res){
    res.send('successfully stored')
})

app.listen(3001, function (){
    console.log('listening on 3001')
})

let express = require('express')
let app = express()

app.use(express.static('public'))

app.get('/', function (req,res){
    console.log(__dirname)
    res.sendFile('../public/index.html')
})

app.listen(3001, function (){
    console.log('listening on 3001')
})

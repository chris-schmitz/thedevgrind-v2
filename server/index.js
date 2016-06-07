let express = require('express')
let app = express()

app.use(express.static('public'))

app.get('/', function (req,res){
    res.sendFile('../public/index.html')
})

app.get('/about', function (req,res){
    // handoff to a service that returns the data(? is that how it should be done w/ node?)
    console.log('hit the about route')
    let payload = {
        text: "here's some content returned from the server",
        image: "https://placebear.com/400/400"
    }
    res.send(payload)
})

app.listen(3001, function (){
    console.log('listening on 3001')
})

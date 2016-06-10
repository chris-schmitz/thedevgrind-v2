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
        text: `
# here's some markdown returned from the server and rendered as html
bla bla bla

[checkout this cool link!](www.google.com)

- List item 1
- List item 2

And now a code block:

    //how to lock up a browser window: 
    while(1 == 1){ console.log('lol') }
        `,
        image: "https://placebear.com/400/400"
    }
    res.send(payload)
})

app.get('/contact', function (req,res){
    let payload = {
        image: "https://placebear.com/400/400",
        text: `# Contact
        You can find me at the following places:

        - Twitter [@cschmitz81](twitterlink)
        - LinkedIn [linkedinlink](linkedinlink)
        - Github [githublink](githublink)
        - Bitbucket [bitbucketlink](bitbucketlink)
        - Email [chris.schmitz.dev@gmail.com](mailto:chris.schmitz.dev@gmail.com)

        Also, if you're in the Saint Louis area I'm normally at the following meetups:
        - [Saint Louis Full Stack Web Development](stlfullstackurl)
        - [Node.jSTL](nodejstlurl)
        - [FileMakerSTL](FileMakerSTLurl)
        `
    }
    res.send(payload)
})

app.listen(3001, function (){
    console.log('listening on 3001')
})

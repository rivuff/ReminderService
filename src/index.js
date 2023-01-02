const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const {sendBasicEmail} = require('./service/email-service')

const setupAndStartServer = ()=>{
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.listen(3004, ()=>{
        console.log(`server started at port ${PORT}`);

        sendBasicEmail(
            'admin@support.com',
            'rivunaskar0@gmail.com',
            'this is a testing email',
            'how are you liking our service'
        )
    })
    
}

setupAndStartServer()
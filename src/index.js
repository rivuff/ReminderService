const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig')
const {createChannel,subscribeMessage} = require('./utils/messageQueue')
const {sendBasicEmail} = require('./service/email-service')
const schedule = require('./utils/job')
const {REMINDER_BINDING_KEY} = require('./config/serverConfig')
const TicketController = require('./controllers/ticket-controllers')
const EmailService = require('./service/email-service')
const setupAndStartServer = async ()=>{
    const app = express()

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    
    app.post('/api/v1/tickets', TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel, EmailService ,REMINDER_BINDING_KEY )

    app.listen(3004, ()=>{
        console.log(`server started at port ${PORT}`);

        // sendBasicEmail(
        //     'admin@support.com',
        //     'rivunaskar0@gmail.com',
        //     'this is a testing email',
        //     'how are you liking our service'
        // )

        schedule();
    })
    
}

setupAndStartServer()
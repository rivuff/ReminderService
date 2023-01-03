const sender = require('../config/emailConfig')
const TicketRepository= require('../repository/ticket-repository')
const repo = new TicketRepository();

const sendBasicEmail = (mailFrom, mailTo, mailSubject, mailBody)=>{
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    })
}

const fetchPendingEmails = async(timestamp)=>{
    try {
       
        const response = await repo.getAll();
        return response;
    } catch (error) {
        console.log(error);
        throw(error)
    }
}

const createNotification = async(data)=>{
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification
} 
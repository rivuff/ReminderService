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
       
        const response = await repo.get({status:"PENDING"});
        return response;
    } catch (error) {
        console.log(error);
        throw(error)
    }
}

const updateTicket = async(ticketId, status)=>{
    try {
        const tikcet = await repo.update(ticketId, status);
        return tikcet;
    } catch (error) {
        console.log(error);
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

const testingQueue = (data)=>{
    try {
        console.log("Inside service layer", data);
    } catch (error) {
        throw(error);
    }
}

module.exports ={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    testingQueue
} 
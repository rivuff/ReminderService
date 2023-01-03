const {NotificationTicket} = require('../models/index');

class TicketRepository{
    
    async getAll(){
        try {
            const tickets = NotificationTicket.findAll();
            return tickets
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async create(data){
        try {
            const ticket =await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error
        }
    }
}

module.exports = TicketRepository;
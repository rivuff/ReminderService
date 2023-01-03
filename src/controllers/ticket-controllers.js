const TicketService = require('../service/email-service')


const create = async (req,res)=>{
    try {
        const response = await TicketService.create(req.body);
        return res.status(200).json({
            success: true,
            data:response,
            err: {},
            message: "Successfully created an email reminder"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data:{},
            err: error,
            message: "Successfully created an email reminder"
        })
    }
}

module.exports = {
    create
}
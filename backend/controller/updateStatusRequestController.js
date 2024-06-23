const Request = require ('../models/request.model')

async function updatedStatusRequest (req,res){
    try {
        const {id,status} = req.body;
        await Request.findByIdAndUpdate(id,{ $set: { status } })
        res.status(200)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

module.exports = updatedStatusRequest
const Request = require ('../models/request.model')

async function updatedStatusRequest (req,res){
    try {
        const {id} = req.params;
        await Request.findByIdAndUpdate(id,req.body)
        res.status(200)
    } catch (error) {
        res.status(200)
        console.log(error);
    }
}

module.exports = updatedStatusRequest
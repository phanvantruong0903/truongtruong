const Service = require ('../models/service.model')

async function updatedStatusService (req,res){
    try {
        const {id} = req.params;
        const ServiceToUpdate = await Service.findOne({_id:id})
        const newStauts = !ServiceToUpdate.status
        console.log(newStauts);
        const updatedService  = await Service.findByIdAndUpdate(id,{status: newStauts})
        res.send(updatedService )
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

module.exports = updatedStatusService
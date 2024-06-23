const Service = require ('../models/service.model')

async function updatedService (req,res){
    try {
        const {id} = req.params;
        const newSerice = await Service.findByIdAndUpdate(id,req.body)
        res.send(newSerice)
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

module.exports = updatedService
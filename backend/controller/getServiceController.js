const Service = require ('../models/service.model')

async function getService (req,res){
    try {
        const requests = await Service.find()
        const list = new Array(...requests)
        res.json(list); 
    } catch (error) {
        res.status(500)
        console.log(error);
    }
}

module.exports = getService
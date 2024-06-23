const Service = require('../models/service.model')

async function createService (req,res){
    try {
        const requestData = new Service(req.body);
        requestData.save()
        res.status(201).json({
            data : requestData,
            error : false,
            succes: true,
            message: "Create Service Successfully!"
        })
    } catch (error) {
        res.json({
            message : error,
            error: true,
            succes : false
        })
    }
}

module.exports = createService
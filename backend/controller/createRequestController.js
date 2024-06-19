const Request = require('../models/request.model')

async function createRequest (req,res){
    try {
        const requestData = new Request(req.body);
        console.log(requestData);
        res.status(201).json({
            data : requestData,
            error : false,
            succes: true,
            message: "Send Request Successfully!"
        })
    } catch (error) {
        res.json({
            message : error,
            error: true,
            succes : false
        })
    }
}

module.exports = createRequest
const Request = require ('../models/request.model')

async function getRequest (req,res){
    try {
        const request = await Request.find({})
        res.status(200).json({
            data : request,
            error : false,
            succes: true,
        })
    } catch (error) {
        res.json({
            message : "looi day ne`",
            error: true,
            succes : false
        })
    }
}

module.exports = getRequest
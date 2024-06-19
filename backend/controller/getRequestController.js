const Request = require ('../models/request.model')

async function getRequest (req,res){
    try {
        const request = await Request.find({})
        const list = new Array(...request)
        res.json(list)
    } catch (error) {
        res.status(200)
        console.log(error);
    }
}

module.exports = getRequest
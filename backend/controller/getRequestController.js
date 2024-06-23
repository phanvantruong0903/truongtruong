const Request = require('../models/request.model');

async function getRequest(req, res) {
    try {
        const requests = await Request.find();
        const list = new Array(...requests); 
        res.json(list); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error'); // Trả về mã trạng thái 500 nếu có lỗi xảy ra
    }
}

module.exports = getRequest;
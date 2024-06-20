const express = require ('express')

const router = express.Router()

const createRequest = require('../controller/createRequestController')

const getRequest = require('../controller/getRequestController')

const updatedStatusRequest = require('../controller/updateStatusRequestController')

router.post('/sendRequest',createRequest)

router.get('/getRequest',getRequest)

router.put('/updateStatus/:id',updatedStatusRequest)

module.exports = router;
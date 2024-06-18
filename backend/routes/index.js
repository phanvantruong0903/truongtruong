const express = require ('express')

const router = express.Router()

const createRequest = require('../controller/createRequestController')

const getRequest = require('../controller/getRequestController')

router.post('/sendRequest',createRequest)

router.get('/getRequest',getRequest)

module.exports = router;
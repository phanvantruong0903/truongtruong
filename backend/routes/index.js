const express = require ('express')

const router = express.Router()

const createRequest = require('../controller/createRequestController')

const getRequest = require('../controller/getRequestController')

const updatedStatusRequest = require('../controller/updateStatusRequestController')

const createService = require('../controller/createServiceController')

const getService = require('../controller/getServiceController')

const updateService = require('../controller/updateServiceController')

const updateStatusService = require('../controller/updateStatusServiceController')

router.post('/sendRequest',createRequest)

router.get('/getRequest',getRequest)

router.put('/updateStatusRequest/:id',updatedStatusRequest)

router.post('/createService',createService)

router.get('/getService',getService)

router.put('/updateService/:id',updateService)

router.put('/updateStatusService/:id',updateStatusService)

module.exports = router;
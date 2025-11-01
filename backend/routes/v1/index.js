const express = require('express');
const infoController = require('../../controller/info-controller')
const router = express.Router();
console.log("In v1 index.js of routes");
router.get('/info',infoController.info);

module.exports = router;

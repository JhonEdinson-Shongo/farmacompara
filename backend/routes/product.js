const {Router} = require('express');
const router = Router();

const controllerList = require('../controllers/auth.controller');

router.route("/")
    .post(controllerList.getProducts);

module.exports = router;
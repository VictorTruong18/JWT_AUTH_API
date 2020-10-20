const router = require('express').Router();
const user = require('../models/User');
const verify = require('../verifyToken');


router.get('/', verify, (req,res) => {
    res.send(req.user);
    user.findByIdAndRemove({_id: req.user});
})


module.exports = router;
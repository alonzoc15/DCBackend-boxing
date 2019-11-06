const express = require('express'),
    router = express.Router(),
    BoxersModel = require('../models/boxers');

/* GET home page. */
router.get('/', async(req, res, next) => {
const boxerList = await BoxersModel.getAll();

res.render('template', {
    locals: {
        title: 'Lets Get Ready to Rumble!',
        boxerData: boxerList,
        isLoggedIn: req.session.is_logged_in,
        userName: req.session.first_name
    },
    partials: {
        partial: 'partial-index'
    }
});
});

router.get('/:boxer_id', async(req, res, next) => {
const { boxer_id } = req.params;
const theBoxer = await BoxersModel.getById(boxer_id);

res.render('template', {
    locals: {
        title: 'This is one Boxer',
        boxerData: theBoxer
    },
    partials: {
        partial: 'partial-single-Boxer'
    }
});
});

module.exports = router;

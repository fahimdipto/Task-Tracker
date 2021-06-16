const router = require('express').Router();
let User = require('../models/user.model');
const response = require("../utils/response");
const errres = require('../utils/errorresponse');

router.route('/').get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(errres("Error!", "err")));
});

router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const newUser = new User ({username});

newUser.save()
    .then(()=> res.json(response("User Added", "/add")))
    .catch(err => res.status(400).json(errres("Error!", "err")));
});
router.route('/:id').get((req,res) =>{
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json(errres("Error!", "err")));
});
router.route('/:id').delete((req,res) =>{
    User.findByIdAndDelete(req.params.id)
        .then(users => res.json(response("User Deleted as per delete request","/:id")))
        .catch(err => res.status(400).json(errres("Error!", "err")));
});
router.route('/update/:id').post((req,res) =>{
    User.findById(req.params.id)
        .then(users => {
            users.username = req.body.username;
            users.save()
                .then(users => res.json(users))
                .catch(err => res.status(400).json(errres("Error!", "err")));
        })
        .catch(err => res.status(400).json(errres("Error!", "err")));
});
module.exports= router;
const express = require('express');
const router  = express.Router();
const User = require("../models/User");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get("/edit", (req, res) => {
  res.render("edit", {user:req.user});
})

router.post("/edit", (req, res) => {
  
  User.findByIdAndUpdate(req.user._id, req.body, {new:true})
  .then(user => {
    console.log(user);
    res.redirect("/edit");
  })
})

module.exports = router;

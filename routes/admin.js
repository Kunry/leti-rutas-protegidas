const express = require("express");
const router = express.Router();


router.use((req, res, next) => {
  if(req.user.role == "admin"){
    next()
  } else {
    next(new Error);
  }
})
router.get("/pepe", (req, res, next) => {
  console.log(req.user)
  res.render("admin/admin")
})

router.get("/otraRuta", (req, res, next) => {

  res.render("admin/funcionaAdmin");
})

router.use((err, req, res, next) => {
  next();
})

module.exports = router;
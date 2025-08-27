const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Sending all the contacts from route dir")
})

module.exports = router
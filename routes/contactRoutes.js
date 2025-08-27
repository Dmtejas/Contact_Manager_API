const express = require('express')
const router = express.Router()
const { getContacts, createContact, getContact } = require('../controller/contactController')

router.route('/').get(getContacts)

router.route('/:id').get(getContact)

router.route('/').post(createContact)

router.put("/:id", (req, res) => {
  res.send(`Updating the contact number : ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
  res.send(`Deleting the contact number : ${req.params.id}`)
})



module.exports = router
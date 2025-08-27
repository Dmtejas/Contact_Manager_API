const express = require('express')
const router = express.Router()
const { getContacts, createContact, getContact, updateContent, deleteContact } = require('../controller/contactController')

router.route('/').get(getContacts)

router.route('/:id').get(getContact)

router.route('/').post(createContact)

router.route('/:id').put(updateContent)

router.route('/:id').delete(deleteContact)

module.exports = router
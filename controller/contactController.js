const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');
const { update } = require('lodash');


//@desc Get all the contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
  const contacts = await Contact.find()
  res.status(200).json(contacts);
});

//@desc Create all the contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;

    // try {
    //   if(name != null && email != null) {
    //     res.status(200).json({
    //       message: "Contact succesfully created",
    //       name,
    //       email
    //     })
    //   } else {
    //     throw new Error("All feilds are mandatory")
    //   }
    // } catch(error) {
    //   res.status(400)
    //   next(error)
    // } 

    //With async handler you can simply write 
    if(!name && !email && !phone) {
      res.status(400)
      throw new Error("All feilds are mandatory")
    } else {
      const contact = await Contact.create({
        name,
        email,
        phone,
      });
      res.status(201).json(contact)
      
    }
});

//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  res.status(200).json(contact);
});

//@desc update the contacts
//@route PUT /api/contacts/:id
//@access public
const updateContent = asyncHandler(async (req, res) => {
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
  )
  res.status(200).json(updatedContact);
});

//@desc delete all the contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact) {
    res.status(404)
    throw new Error("Contact not found")
  }
  await contact.deleteOne()

  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContent,
  deleteContact,
};

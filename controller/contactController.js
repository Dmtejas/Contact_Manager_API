//@desc Get all the contacts
//@route GET /api/contacts
//@access public


const getContacts = (req, res) => {
  res.json({message: "Sending contacts"})
}


//@desc Create all the contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  const { name, email } = req.body;
  if(!name || !email ) {
    res.status(500);
    throw new Error("All feilds are mandatory")
  } 
  res.status(200).json({
    name : {name},
    email: {email}
  })
 
}

//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({message: "Get a particular contact"})
}

//@desc update the contacts
//@route PUT /api/contacts/:id
//@access public
const updateContent = (req, res) => {
  res.status(200).json({message: `Updating the contact`})
}

//@desc delete all the contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({message: "Deleted user"})
}


module.exports = {getContacts, createContact, getContact, updateContent, deleteContact}
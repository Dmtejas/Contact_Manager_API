//@desc Get all the contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.json({ message: "Sending contacts" });
};

//@desc Create all the contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res, next) => {
  const { name, email } = req.body;
  try {
    if(name != null && email != null) {
      res.json(
      {
        "Message": "User successfully created",
        "Name": name,
        "Email": email
      })
    } else {
      throw new Error("Can't be empty")
    }
  } catch(error) {
    console.log(error.message)
    next(error.message)
  }
  
};

//@desc Get a specific contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get a particular contact" });
};

//@desc update the contacts
//@route PUT /api/contacts/:id
//@access public
const updateContent = (req, res) => {
  res.status(200).json({ message: `Updating the contact` });
};

//@desc delete all the contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: "Deleted user" });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContent,
  deleteContact,
};

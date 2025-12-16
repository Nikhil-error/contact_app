//@des All contact controller functions will be here
//method GET, POST, PUT, DELETE
//access PUBLIC

//@route /api/contact
const getContact = (req, res) => {
    res.status(200).json({message: 'Get Contact Page'});
};

//@route /api/contact
const createContact = (req, res) => {
    res.status(201).json({message: 'Post Contact Page'});
};

//@route /api/contact/:id
const updateContact = (req, res) => {
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
};

//@route /api/contact/:id
const deleteContact = (req, res) => {
    res.status(200).json({message:`Delete Contact for ${req.params.id}`});
};

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact
};
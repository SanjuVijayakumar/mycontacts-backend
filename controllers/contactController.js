import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler (async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler (async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if ( !name || !email || !phone ) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

//@desc Update contacts
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

//@desc Get contacts
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`});
});

export {
    getContacts,
    createContact,
    updateContact,
    getContact,
    deleteContact
};
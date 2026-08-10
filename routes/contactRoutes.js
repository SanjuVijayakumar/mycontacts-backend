import express from "express";
import { getContacts, createContact, updateContact, getContact, deleteContact } from "../controllers/contactController.js";

const Router = express.Router()

Router.route("/").get(getContacts).post(createContact);
Router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


export default Router;
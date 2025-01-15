import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from "../controllers/controller";

const routes = (app) => {
  app.route('/contact')
    .get(getContacts)
    .get(getContactWithID)
    .post(addNewContact);

  app.route('/contact/:contactId')

    .put(updateContact)

    .delete(deleteContact)
}

export default routes
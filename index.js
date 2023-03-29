const argv = require("yargs").argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;
    case "get":
      const contactById = await getContactById(id);
      if (!contactById) {
        throw new Error(`The contact with ID ${id} is not found`);
      }
      console.log(contactById);
      break;
    case "remove":
      const removeById = await removeContact(id);
      console.table(removeById);
      break;
    case "add":
      const addNewContact = await addContact(name, email, phone);
      console.log(addNewContact);
      break;
    default:
      console.warn(`${action} Unknown action type!`);
  }
}
invokeAction(argv);

console.log("Hello, Node.js!");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await listContacts();
      console.log(contacts);
      break;
    case "getById":
      const contactById = await getContactById(id);
      if (!contactById) {
        throw new Error(`The contact with ID ${id} is not found`);
      }
      console.log(contactById);
      break;
    case "removeById":
      const removeById = await removeContact(id);
      console.log(removeById);
      break;
    case "addContact":
      const addNewContact = await addContact(data);
      console.log(addNewContact);
      break;
    default:
      console.log("Unknown action");
  }
};

// invokeAction({ action: "getAll" });  DONE

// let id = "qdggE76Jtbfd9eWJHrssH";
// invokeAction({ action: "getById", id });  DONE

// let id = "rsKkOQUi80UsgVPCcLZZR";
// invokeAction({ action: "removeById", id });  DELETES A CONTACT MANY TIMES

// let dataInfo = {
//   name: "Liubov Firsova",
//   email: "test@mail.com",
//   phone: "(095) 333-3333",
// };

// invokeAction({ action: "addContact", data: dataInfo });  ADDS A CONTACT MANY TIMES

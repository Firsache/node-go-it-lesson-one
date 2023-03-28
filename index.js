console.log("Hello, Node.js!");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

console.log(listContacts());
console.log(getContactById());
console.log(removeContact());
console.log(addContact());

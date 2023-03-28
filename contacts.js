const { readFile, writeFile, appendFile } = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const response = await readFile(contactsPath, "utf8");
  return response;
}

function getContactById(contactId) {
  let contactsArr = listContacts();
  let contactInfo = contactsArr.filter((elem) => elem.id === contactId);
  return contactInfo;
}

async function removeContact(contactId) {
  let contactsArr = listContacts();
  let newContacsArr = contactsArr.filter((elem) => elem.id !== contactId);
  await writeFile(contactsPath, newContacsArr);
}

async function addContact(name, email, phone) {
  let newContact = { name, email, phone };
  await appendFile(contactsPath, newContact, "utf8");
}
module.exports = { listContacts, getContactById, removeContact, addContact };

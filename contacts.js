const { readFile, writeFile } = require("fs");
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

function listContacts() {
  readFile(contactsPath, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    return data;
  });
}

function getContactById(contactId) {
  let contactsArr = listContacts();
  let contactInfo = contactsArr.filter((elem) => elem.id === contactId);
  return contactInfo;
}

function removeContact(contactId) {
  let contactsArr = listContacts();
  let newContacsArr = contactsArr.filter((elem) => elem.id !== contactId);
  return newContacsArr;
}

function addContact(name, email, phone) {
  let newContact = { name, email, phone };
  writeFile(contactsPath, newContact, "utf8");
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };

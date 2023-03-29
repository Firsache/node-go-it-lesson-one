const { readFile, writeFile } = require("fs/promises");
const { v4 } = require("uuid");

const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const response = await readFile(contactsPath);
  const contactsArr = JSON.parse(response);
  return contactsArr;
}

async function getContactById(contactId) {
  let contactsArr = await listContacts();
  let contactInfo = contactsArr.filter((elem) => elem.id === contactId);
  if (!contactInfo) {
    return null;
  }
  return contactInfo;
}

async function removeContact(contactId) {
  let contactsArr = await listContacts();
  let newContactsArr = contactsArr.filter((elem) => elem.id !== contactId);
  if (!newContactsArr) {
    return null;
  }
  await writeFile(contactsPath, JSON.stringify(newContactsArr));
  return newContactsArr;
}

async function addContact(data) {
  let contactsArr = await listContacts();
  let newContact = { id: v4(), ...data };
  let newContactsArr = [...contactsArr, newContact];
  //   contactsArr.push(newContact);
  await writeFile(contactsPath, JSON.stringify(newContactsArr));
  return newContact;
}
module.exports = { listContacts, getContactById, removeContact, addContact };

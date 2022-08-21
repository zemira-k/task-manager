import { storageService } from "./generalService/storageService";
export const contactService = {
  query,
  add,
  getById,
  remove,
  update,
};
const entityType = "contact";

function query(filter = null) {
  let contacts = storageService.query(entityType);
  if (filter) contacts = _filter(contacts, filter);
  return contacts;
}

function add(contact) {
  const newContact = storageService.post(entityType, contact);
  return newContact;
}

function getById(contactId) {
  const contact = storageService.getById(entityType, contactId);
  return contact;
}
function remove(contactId) {
  const newContacts = storageService.remove(entityType, contactId);
  return newContacts;
}
function update(contact) {
  const updateContact = storageService.put(entityType, contact);
  return updateContact;
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(contacts, filter) {
  let filterContacts = contacts.filter(
    (contact) =>
      filter.phone &&
      contact.phone === filter.phone &&
      ((filter.name && contact.name.include(filter.name)) ||
        (filter.role && contact.role.include(filter.role))),
  );
  return filterContacts;
}

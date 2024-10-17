import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const initialContacts = await readContacts();
  const newContact = createFakeContact();
  const result = [...initialContacts, newContact];
  writeContacts(result);
};

addOneContact();

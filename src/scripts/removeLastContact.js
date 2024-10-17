import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const initialContacts = await readContacts();
  initialContacts.pop();
  writeContacts(initialContacts);
};

removeLastContact();

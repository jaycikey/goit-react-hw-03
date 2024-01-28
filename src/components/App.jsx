import { ContactList } from "./ContactList/ContactList";
import items from "./contacts.json";
import styles from "./App.module.css";
import { SearchBar } from "./SearchBox/SearchBar";
import { useState } from "react";

export const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(items);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter((item) => item.id !== contactId);
    });
  };

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <SearchBar text={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

import { ContactList } from "./ContactList/ContactList";
import contacts from "./contacts.json";
import styles from "./App.module.css";
import { SearchBar } from "./SearchBox/SearchBar";
import { useState } from "react";

export const App = () => {
  const [filter, setFilter] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.phonebook}>
      <h1>Phonebook</h1>
      <SearchBar text={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleContact } from './App.styled';

export default function App() {

  const [contacts, setContacts] = useState(() => { return JSON.parse(window.localStorage.getItem('contacts')) ?? [] });
  const [filter, setFilter] = useState('');

  // перезапис в local storage даних при зміні стейту
  useEffect(() => {
    console.log('перезапис при зміні стейту :>> ');
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // створюємо новий контакт і додаємо його в стейт
  const createContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  // слідкуємо за інпутом фільтру
  const filterChange = ({ target: { value } }) => {
    setFilter(value);
  };

  // фільтруємо масив контактів по інпуту фільтра
  const filterData = contacts => {
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredArray;
  };

  // видаляємо контакт по id
  const deleteContact = deleteID => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== deleteID)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm createContact={createContact} contacts={contacts} />
      <TitleContact>Contacts</TitleContact>
      <Filter filterChange={filterChange} filterValue={filter} />
      <ContactList
        contacts={filterData(contacts)}
        filter={filter}
        deleteContact={deleteContact}
      />
    </Container>
  );
}

import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from 'Redux/thunks';
import { Toaster } from 'react-hot-toast';
import { Container, Title, TitleContact, Message } from './App.styled';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid blue',
            padding: '15px',
            marginTop: '30px',
          },
        }}
      />
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      {isLoading && <Message>Loading...</Message>}
      {error && <Message>{error}</Message>}
      {items.length > 0 ? (
        <ContactList />
      ) : (
        <Message>Sorry, no contacts yet...</Message>
      )}
    </Container>
  );
}

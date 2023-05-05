import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector} from 'react-redux';
import { Container, Title, TitleContact } from './App.styled';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // фільтруємо масив контактів по інпуту фільтра
  const filterData = contacts => {
    const filteredArray = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredArray;
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContact>Contacts</TitleContact>
      <Filter />
      <ContactList contacts={filterData(contacts)} />
    </Container>
  );
}

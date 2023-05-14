import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'Redux/selectors';

// відмальовка списку контактів
export const ContactList = () => {

  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.phone}
          />
        );
      })}
    </List>
  );
};


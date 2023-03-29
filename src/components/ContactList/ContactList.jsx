import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <List>
      {contacts.map(contact => {
        if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <ContactListItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={deleteContact}
            />
          );
        } else {
          return <></>;
        }
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

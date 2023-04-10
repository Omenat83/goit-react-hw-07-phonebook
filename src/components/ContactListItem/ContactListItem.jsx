import PropTypes from 'prop-types';
import { ListItem, Button } from './ContactListItem.styled';

// відмальовка одного контакту зі списку
export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" id={id} onClick={e => deleteContact(e.target.id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

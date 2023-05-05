import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsSlice';
import { ListItem, Button } from './ContactListItem.styled';

// відмальовка одного контакту зі списку
export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  // видаляємо контакт по id
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" id={id} onClick={handleDelete}>
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

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ListItem, Button } from './ContactListItem.styled';
import { deleteContactsThunk } from 'Redux/thunks';

// відмальовка одного контакту зі списку
export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem key={id}>
      <p>
      {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContactsThunk(id))}>
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

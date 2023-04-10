import { useState } from 'react';
import {
  Form,
  FormItem,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import PropTypes from 'prop-types';
export default function ContactForm({ createContact, contacts }) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

// слідкування за input
  const inputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  // обробка кліку по Add Contact
  const onSubmit = e => {
    e.preventDefault();
    const newName = name.toLocaleLowerCase();

    if (
      contacts.some(contact => {
        return contact.name.toLowerCase() === newName;
      })
    ) {
      alert(`${newName} is already in contact`);
    } else {
      createContact({
        name: name,
        number: number,
      });

      setName('');
      setNumber('');
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormItem>
        <FormLabel htmlFor="inputName">Name</FormLabel>
        <FormInput
          id="inputName"
          type="text"
          name="name"
          onChange={inputChange}
          value={name}
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="inputPhone">Phone number</FormLabel>
        <FormInput
          id="inputPhone"
          type="tel"
          name="number"
          onChange={inputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormItem>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
}

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

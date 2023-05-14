import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContactsThunk } from 'Redux/thunks';
import { getAllContacts } from '../../Redux/selectors';
import {
  Form,
  FormItem,
  FormLabel,
  FormInput,
  FormButton,
} from './ContactForm.styled';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

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
      toast.error(`${newName} is already in contacts`);
    } else {
      const newContact = {
        name: name,
        phone: number,
      };
      dispatch(addContactsThunk(newContact));

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

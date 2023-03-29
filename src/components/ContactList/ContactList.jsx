// import { Component } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter}) => {
  console.log('contacts list:>> ', contacts);
  console.log('from CL filter :>> ', filter);

  return (
      <ul>
        {contacts.map(contact => {
            return (
                <ContactListItem
                    key={contact.id}
                    name={contact.name}
                    number={contact.number}
                    />
            );
        })}
      </ul>
  );
};

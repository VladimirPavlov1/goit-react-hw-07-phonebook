import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {  getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts)
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Contact {...contact} />
          </Item>
        );
      })}
    </ul>
  );
};

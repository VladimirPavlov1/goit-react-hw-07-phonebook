import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);

  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <Contact {...contact} />
            </Item>
          );
        })}
    </ul>
  );
};

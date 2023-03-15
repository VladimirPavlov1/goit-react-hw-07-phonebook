import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { visibleContacts } from 'redux/selectors';
import { FallingLines } from 'react-loader-spinner';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);
  
  return (
    <ul>
      
      {contacts.length?contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <Contact {...contact} />
            </Item>
          );
        }):<FallingLines/>
      
        }
    </ul>
  );
};

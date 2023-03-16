import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {  visibleContacts } from 'redux/selectors';


export const ContactList = () => {
  const contacts = useSelector(visibleContacts);
 
  return (
    <ul>
     
      {contacts.map(contact => {
          return (
            <Item key={contact.id}>
              <Contact {...contact} />
            </Item>
          );
        })
        }
        {!contacts.length&&<div>not found</div>}

        
    </ul>
  );
};

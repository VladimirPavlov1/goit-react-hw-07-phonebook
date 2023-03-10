import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Contacts, Container } from './App.styled';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
// import { getError,getIsLoading } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts)

  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts />
      </Section>
      
      <Contacts>Contacts</Contacts>
      <Filter />
      {contacts? <ContactList /> : <h2>No such contact found</h2>}
    </Container>
  );
};

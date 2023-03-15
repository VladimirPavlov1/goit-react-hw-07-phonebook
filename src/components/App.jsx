import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Contacts, Container } from './App.styled';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      <Contacts>Contacts</Contacts>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length > 0 ? <ContactList /> : <h2>No such contact found</h2>}
    </Container>
  );
};

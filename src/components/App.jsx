import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Contacts, Container } from './App.styled';

import { fetchContacts } from 'redux/operations';


export const App = () => {
  

  const dispatch = useDispatch();


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
    
       <ContactList /> 
    </Container>
  );
};

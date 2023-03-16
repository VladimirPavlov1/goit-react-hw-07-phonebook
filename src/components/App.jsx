import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {  useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Contacts, Container } from './App.styled';

import { fetchContacts } from 'redux/operations';
import { FallingLines } from 'react-loader-spinner';
import { selectError, selectIsLoading } from 'redux/selectors';


export const App = () => {
  
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
console.log(isLoading)

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
        
       {isLoading&&!error?<FallingLines/>:<ContactList /> }
    </Container>
  );
};

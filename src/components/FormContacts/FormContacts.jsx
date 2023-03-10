import {
  BtnAdd,
  FormWrapper,
  Input,
  Label,
  ErrorText,
} from './FormContacts.styled';

import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';




const FilterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Please, enter your full name')
    .max(26, `Your upper limit symbol`)
    .required('Required'),
  number: Yup.string()
    .required('Required')
    .min(6, 'Min 6 symbol')
    .max(12, 'Max symbol 12'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <>
          <ErrorText>{message}</ErrorText>
        </>
      )}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = () => {

 

  const handleSubmit = (onSubmit, { resetForm }) => {
   

   

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FilterSchema}
    >
      <FormWrapper>
        <Form>
          <Label>
            Name
            <Input type="text" name="name" />
            <FormError name="name" />
          </Label>

          <Label>
            Number
            <Input type="tel" name="number" />
            <FormError name="number" />
          </Label>

          <BtnAdd type="submit">Add contact</BtnAdd>
        </Form>
      </FormWrapper>
    </Formik>
  );
};


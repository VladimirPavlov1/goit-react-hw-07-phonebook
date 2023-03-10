import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormWrapper = styled.div`
  width: 400px;
  height: 350px;
  padding: 10px;

  border: 1px solid black;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 20px;

  font-size: 22px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  display: block;
  width: 170px;
  height: 30px;
  box-shadow: 5px 5px 5px 0;
  margin: 10px 0;

  font-size: 18px;
`;

export const BtnAdd = styled.button`
  display: block;
  padding: 4px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  :hover {
    background-color: blue;
  }
`;

export const ErrorText = styled.p`
  color: red;
`;

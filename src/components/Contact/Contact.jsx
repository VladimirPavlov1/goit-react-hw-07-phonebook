import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { WrapperContact, Title, BtnDelete } from './Contact.styled';


export const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };
  return (
    <WrapperContact>
      <Title>
        {name} : {number}
      </Title>
      <BtnDelete type="button" onClick={handleDelete}>
        delete
      </BtnDelete>
    </WrapperContact>
  );
};


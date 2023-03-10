import PropTypes from 'prop-types';
import { BtnDelete, Title, WrapperContact } from './Contact.styled';


export const Contact = ({ name, id, phone }) => {
  

  return (
    <WrapperContact>
      {/* <Title>
        {name} : {number}
      </Title>
      <BtnDelete type="button" onClick={() => dispatch(deleteContacts({ id }))}>
        delete
      </BtnDelete> */}
    </WrapperContact>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

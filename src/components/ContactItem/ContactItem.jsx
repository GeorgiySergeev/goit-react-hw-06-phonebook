import { ListItemStyled } from './ContactItem.styled';
import { FaTrashAlt } from 'react-icons/fa';

export const ListItem = ({ id, name, number, handlerClick }) => {
  return (
    <ListItemStyled>
      <p>{name}:</p>
      <span style={{ marginRight: 'auto' }}> {number}</span>
      <FaTrashAlt
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          handlerClick(id);
        }}
      >
        Delite
      </FaTrashAlt>
    </ListItemStyled>
  );
};

import { List } from './ContactList.styled';
import { ListItem } from 'components/ContactItem/ContactItem';
import { getContacts } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlise';
import { filterValue } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterValue);
  const dispatch = useDispatch();

  const onDeliteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {/* <h4>{title}</h4> */}
      <List>
        {contacts
          .filter(
            contact =>
              filter === '' ||
              contact.name.toLowerCase().includes(filter.toLowerCase().trim())
          )
          .map(({ name, id, number }) => (
            <ListItem
              key={id}
              name={name}
              number={number}
              handlerClick={onDeliteContact}
              id={id}
            ></ListItem>
          ))}
      </List>
    </>
  );
};

import { Conatiner, MainWrapper, Note } from './App.styled';
import { Header } from 'components/Header/Header';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Conatiner>
        <Header>
          <Filter />
        </Header>
        <MainWrapper className={contacts.length === 0 ? 'empty' : ''}>
          <ContactForm></ContactForm>

          {contacts.length === 0 ? (
            <Note>Your phonebook is empty! Add a contact.</Note>
          ) : (
            <ContactList />
          )}
        </MainWrapper>
      </Conatiner>
    </>
  );
}

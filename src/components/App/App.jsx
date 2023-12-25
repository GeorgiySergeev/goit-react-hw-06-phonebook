import React, { useEffect, useState } from 'react';
// import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Conatiner, MainWrapper, Note } from './App.styled';
import { Header } from 'components/Header/Header';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';

import {
  getContactsFromLocalStorage,
  setContactsToLocalStorage,
} from 'helpers';

export function App() {
  const [contacts, setContacts] = useState(getContactsFromLocalStorage());
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContactsToLocalStorage(contacts);
  }, [contacts]);

  const deliteContact = id => {
    const filtered = contacts.filter(contact => contact.id !== id);
    setContacts(filtered);
  };

  const filerContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value);
  };

  const formSubmitData = data => {
    setContacts(prevContacts => {
      if (prevContacts.some(element => element.name === data.name)) {
        Notify.info(`Контакт с именем ${data.name} уже существует!`);
        return prevContacts;
      }
      return [...prevContacts, data];
    });
  };

  return (
    <>
      <Conatiner>
        <Header>
          <Filter value={filter} onFilterInputChange={handleChangeFilter} />
        </Header>
        <MainWrapper className={contacts.length === 0 ? 'empty' : ''}>
          <ContactForm onSubmit={formSubmitData}></ContactForm>

          {contacts.length === 0 ? (
            <Note>Your phonebook is empty! Add a contact.</Note>
          ) : (
            <ContactList
              contacts={filerContact()}
              onDeliteContact={deliteContact}
            />
          )}
        </MainWrapper>
      </Conatiner>
    </>
  );
}

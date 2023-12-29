import { createSlice } from '@reduxjs/toolkit';

const appState = {
  contacts: [],
};

const contactsSlise = createSlice({
  name: 'contacts',

  initialState: appState,

  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        el => !action.payload.includes(el.id)
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;

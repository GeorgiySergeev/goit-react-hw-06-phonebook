import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button, Input } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const id = nanoid();

    onSubmit({ name, number, id });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  // const { name, number } = this.state;

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        placeholder="Name"
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

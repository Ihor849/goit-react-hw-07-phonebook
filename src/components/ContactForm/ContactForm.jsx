import Notiflix from 'notiflix';
import { Formik } from 'formik';

import {
  FormBlock,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';
import { useDispatch,useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContactsList } from 'redux/selectors';


export default function ContactForm() {
  const contacts=useSelector(getContactsList);
 const dispatch=useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {

    const newContact = {name,number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      console.log('Уже есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.name} already in the phonebook`
      );
      return;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      console.log('НОМЕР есть');
      Notiflix.Report.info(
        'INFO',
        `${newContact.number} already in the phonebook`
      );
      return;
    }
    Notiflix.Notify.success(
      `${newContact.name} This subscriber is added to the phone book`
    );
    
    dispatch(addContact(newContact))
    resetForm();
  };

  

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <FormBlock autoComplete="off">
        <BoxName>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // required
          />
        </BoxName>
        <BoxNumber>
          <Label htmlFor="number">Number</Label>
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </BoxNumber>

        <Button type="submit">Add contact</Button>
      </FormBlock>
    </Formik>
  );
}



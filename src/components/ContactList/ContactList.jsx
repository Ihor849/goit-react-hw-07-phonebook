
import {useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';

export const ContactsList = () => {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);

  const filterContacts = 
    [...contacts.filter(contact => contact.name.toLowerCase().includes(filter))]
  ;

  return (
    filterContacts.length !== 0 && (
      <List>
        {filterContacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            
          />
        ))}
      </List>
    )
  );
};



import Notiflix from 'notiflix';
import { Item, Button } from './ContactsItem.styled';
import { useDispatch} from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = (id, name) => {
    
      Notiflix.Confirm.show(
        'Confirm',
        ` Do You want to delete a ${name}?`,
        'Yes',
        'No',
        () => {
          dispatch(deleteContact(id))
        },
        () => {},
        {
          titleColor: '#ce6214',
          titleFontSize: '20px',
          messageColor: '#1e1e1e',
          messageFontSize: '20px',
        }
      );
    };
  return (
    <Item key={id}>
      <span>{name}</span>
      <span>{number}</span>
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </Item>
  );
};



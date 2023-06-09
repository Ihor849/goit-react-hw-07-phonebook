import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filtersSlice';
import { getContactsFilter } from 'redux/selectors';
import { BoxFilter, Label, Input } from './ContactFilter.styled';

export const ContactFilter = () => {
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  return (
    <BoxFilter>
      <Label htmlFor="filter">Find contacts by name</Label>

      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </BoxFilter>
  );
};

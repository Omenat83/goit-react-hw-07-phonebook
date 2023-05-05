import { setFilter } from 'Redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  // слідкуємо за інпутом фільтру
  const filterChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <FilterLabel>
        <p>Find contacts by name</p>
        <FilterInput
          type="text"
          name="filter"
          onChange={filterChange}
          value={filterValue}
          title="Enter name of contact"
        />
      </FilterLabel>
    </div>
  );
};

import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filterChange, filterValue }) => {
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

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export const Filter = ({ filterChange, filterValue }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={filterChange}
          value={filterValue}
          title="Enter name of contact"
        />
      </label>
    </div>
  );
};

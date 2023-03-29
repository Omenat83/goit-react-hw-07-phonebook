import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  max-width: 500px;
  padding-left: 15px;
  gap: 5px;
  flex-direction: column;
  margin-top: 25px;
  font-size: 20px;
`;

export const FilterInput = styled.input`
  width: 40%;
  border: 1px solid lightgray;
  padding: 7px 5px 3px 5px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus-within {
    border-color: rgba(43, 153, 126, 0.72);
    box-shadow: 0px 0px 5px 2px rgba(43, 153, 126, 0.72);
  }
`;

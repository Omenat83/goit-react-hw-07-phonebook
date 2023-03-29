import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7px 0;
  font-size: 24px;
`;

export const Button = styled.button`
  padding: 4px 10px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 0.05em;
  border: 1px solid lightgray;
  border-radius: 4px;

  &:hover {
    background-color: rgba(43, 153, 126, 0.5);
    border-color: rgba(43, 153, 126, 0.72);
    box-shadow: 0px 0px 5px 2px rgba(43, 153, 126, 0.72);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 30vh;
  font-size: 18px;
  h4 {
    text-transform: capitalize;
  }
  button {
    position: absolute;
    background: #fff;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 5px;
  }
  input {
    display: block;
    margin-bottom: 20px;
  }
  div,
  form {
    padding-left: 6px;
    border: 1px solid #cc0000;
    border-radius: 6px;
    height: 30vh;
    margin-bottom: 20px;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  div {
    width: 30rem;
    padding-left: 6px;
    border: 1px solid #cc0000;
    border-radius: 6px;
    height: 45vh;
    margin-bottom: 20px;

    display: block;
  }
  button {
    background: #fff;
    border-radius: 30px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  form {
    input {
      display: block;
      margin-bottom: 10px;
    }
  }
`;

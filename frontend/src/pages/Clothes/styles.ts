import styled from 'styled-components';

export const Container = styled.div`
  height: 30vh;
  font-size: 18px;
  form {
    button {
      margin-left: 14rem;
      margin-top: -2.6rem;
    }
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
`;

export const ContainerInfos = styled.div`
  width: 30rem;
  padding-left: 6px;
  border: 1px solid #cc0000;
  border-radius: 6px;
  height: 30vh;
  margin-bottom: 20px;
  display: block;
  h4 {
    text-transform: capitalize;
  }
  input {
    margin-left: 14rem;
    margin-top: -2.6rem;
  }
`;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from './styles';
const PutProducts = () => {
  const url = 'http://localhost:3000/clothes';
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState();

  const changeClothe = React.useCallback(async (e?: any) => {
    e.preventDefault();
    await axios.put(`${url}/2`);
  }, []);

  return (
    <Container>
      <form onSubmit={() => changeClothe()}>
        <label>Nome da roupa:</label>
        <input
          type="text"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
        />
        <label>Descrição da roupa:</label>
        <input
          type="text"
          value={description}
          onChange={(e: any) => setDescription(e.target.value)}
        />
        <label>Preço da roupa:</label>
        <input
          type="text"
          value={price}
          onChange={(e: any) => setPrice(e.target.value)}
        />
        <button>Enviar alterações</button>
      </form>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default PutProducts;

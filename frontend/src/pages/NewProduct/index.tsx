import React from 'react';
import axios from 'axios';
import { Container } from './styles';
import { Link } from 'react-router-dom';

const NewProduct = () => {
  const url = 'http://localhost:3000/clothes';
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState();
  const addClothe = React.useCallback(
    async (e: any) => {
      const response = { name, description, price };
      await axios.post(url, response);
    },
    [name, description, price],
  );
  return (
    <Container>
      <form onSubmit={addClothe}>
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
        <button>Enviar</button>
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </form>
    </Container>
  );
};

export default NewProduct;

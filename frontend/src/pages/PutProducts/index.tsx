import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useClotheContext } from '../../context/ClotheContext';

const PutProducts = () => {
  const { url } = useClotheContext();
  const { clothes, setClothes } = useClotheContext();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState();

  const changeClothe = React.useCallback(
    async (id: number) => {
      const response = { name, description, price };
      await axios.put(`${url}/${id}`, response);
    },
    [name, description, price, url],
  );

  return (
    <Container>
      {clothes.map((clothe) => (
        <div>
          <h3>{clothe.name}</h3>
          <form onSubmit={() => changeClothe(clothe.id)}>
            <label>Nome da roupa:</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <label>Descrição da roupa:</label>
            <input
              required
              type="text"
              value={description}
              onChange={(e: any) => setDescription(e.target.value)}
            />
            <label>Preço da roupa:</label>
            <input
              required
              type="number"
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
            />
            <button>Enviar alterações</button>
          </form>
        </div>
      ))}
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default PutProducts;

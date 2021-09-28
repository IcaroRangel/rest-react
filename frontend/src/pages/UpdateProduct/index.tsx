import React, { FormEvent } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '../../services/api';

interface RouteParams {
  id: string;
}

interface Clothe {
  name: string;
  id: number;
  description: string;
  price: number;
}

const UpdateProduct = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const { params } = useRouteMatch<RouteParams>();

  const history = useHistory();

  const loadClothe = React.useCallback(async () => {
    const clotheResponse = await api.get<Clothe>(`/${params.id}`);
    console.log(clotheResponse.data);
    const clotheValue = clotheResponse.data;
    setName(clotheValue.name);
    setDescription(clotheValue.description);
    setPrice(clotheValue.price);
  }, [params.id]);

  React.useEffect(() => {
    loadClothe();
  }, [loadClothe]);

  const updateClothe = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const response = { name, description, price };
        await axios.put(`/${params.id}`, response);
        history.goBack();
      } catch (error) {
        alert('Houve um erro');
      }
    },
    [description, name, params.id, price, history],
  );

  return (
    <Container>
      <div>
        <h3>{name}</h3>
        <form onSubmit={updateClothe}>
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

      <Link to="/">
        <button>Voltar</button>
      </Link>
    </Container>
  );
};

export default UpdateProduct;

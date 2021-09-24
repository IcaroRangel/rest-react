import React from 'react';
import { Container, ContainerInfos } from './styles';
import axios from 'axios';

interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function App() {
  const url = 'http://localhost:3000/clothes';
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState();

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await axios.get(url);
    const response = clothesResponse.data;
    setClothes(response);
  }, []);

  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  const removeClothe = React.useCallback(
    async (id: number) => {
      await axios.delete(`${url}/${id}`);
      const deleteClothe = clothes.filter((clothe) => clothe.id !== id);
      setClothes([...deleteClothe]);
    },
    [clothes],
  );
  const addClothe = React.useCallback(
    async (e: any) => {
      const response = { name, description, price };
      await axios.post(url, response);
    },
    [name, description, price],
  );

  const changeClothe = React.useCallback(async (id: number) => {
    await axios.put(`${url}/${id}`);
  }, []);

  return (
    <Container>
      <h1>Roupas</h1>
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
      </form>
      {clothes.map((clothe) => (
        <ContainerInfos key={clothe.id}>
          <form className="changeForm" onSubmit={() => changeClothe(clothe.id)}>
            <h4>{clothe.name}</h4>
            <input
              type="text"
              placeholder="Editar nome"
              onChange={() => {
                changeClothe(clothe.id);
              }}
            />
            <p>{clothe.description}</p>
            <input
              type="text"
              placeholder="Editar descrição"
              onChange={(e: any) => {
                setDescription(e.target.value);
                changeClothe(clothe.id);
              }}
            />
            <p>Preço: R${clothe.price}</p>
            <input
              type="text"
              placeholder="Editar preço"
              onChange={() => {
                changeClothe(clothe.id);
              }}
            />
            <button>Enviar alterações</button>
          </form>
          <button onClick={() => removeClothe(clothe.id)}>Remover Roupa</button>
        </ContainerInfos>
      ))}
    </Container>
  );
}

export default App;

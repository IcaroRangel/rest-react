import React from 'react';
import { Container } from './styles';
import axios from 'axios';

interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function App() {
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState(0);

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await axios.get('http://localhost:3000/clothes');
    setClothes(clothesResponse.data);
  }, []);

  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  const removeClothe = React.useCallback(
    async (id: number) => {
      await axios.delete(`http://localhost:3000/clothes/${id}`);
      const deleteClothe = clothes.filter((clothe) => clothe.id !== id);
      setClothes([...deleteClothe]);
    },
    [clothes],
  );
  const addClothe = React.useCallback(
    async (e: any) => {
      const response = { name, description, price };
      await axios.post('http://localhost:3000/clothes', response);
    },
    [name, description, price],
  );

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
        <button style={{ marginLeft: '14rem', marginTop: '-2.6rem' }}>
          Enviar
        </button>
      </form>
      {clothes.map((clothe) => (
        <div key={clothe.id}>
          <h4>{clothe.name}</h4>
          <p>{clothe.description}</p>
          <p>Preço: R${clothe.price}</p>
          <button onClick={() => removeClothe(clothe.id)}>Remover Roupa</button>
        </div>
      ))}
    </Container>
  );
}

export default App;

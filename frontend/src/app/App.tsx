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

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await axios.get('http://localhost:3000/clothes');
    setClothes(clothesResponse.data);
  }, []);
  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);
  return (
    <>
      <h1>Roupas</h1>
      <div>
        {clothes.map((clothe) => (
          <Container key={clothe.id}>
            <h4>{clothe.name}</h4>
            <p>{clothe.description}</p>
            <p>Preço: R${clothe.price}</p>
          </Container>
        ))}
      </div>
    </>
  );
}

export default App;

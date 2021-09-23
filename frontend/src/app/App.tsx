import React from 'react';
import { Container } from './styles';
interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

const fakeClothes = [
  {
    name: 'camisa social',
    description: 'Uma camisa social GG azul',
    price: 83,
    id: 1,
  },
  {
    name: 'bermuda',
    description: 'Uma bermuda P rosa',
    price: 40,
    id: 2,
  },
];
function App() {
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);
  React.useEffect(() => {
    setClothes(fakeClothes);
  }, []);
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

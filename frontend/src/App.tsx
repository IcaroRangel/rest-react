import React from 'react';

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
          <div key={clothe.id}>
            <span>{clothe.name}</span>
            <span>{clothe.description}</span>
            <span>{clothe.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

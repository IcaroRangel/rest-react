import React from 'react';
import { Container, ContainerInfos } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function Clothes() {
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await api.get('');
    const response = clothesResponse.data;
    setClothes(response);
  }, [setClothes]);

  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  const removeClothe = React.useCallback(
    async (id: number) => {
      await api.delete(`/${id}`);
      const deletedClothe = clothes.filter((clothe) => clothe.id !== id);
      setClothes([...deletedClothe]);
    },
    [clothes, setClothes],
  );

  return (
    <Container>
      <h1>Roupas</h1>
      <Link to="/newProduct">
        <button>Adicionar roupa</button>
      </Link>
      {clothes.map((clothe) => (
        <ContainerInfos key={clothe.id}>
          <h4>{clothe.name}</h4>
          <p>{clothe.description}</p>
          <p>
            Preço: R$
            {clothe.price}
          </p>
          <button onClick={() => removeClothe(clothe.id)}>Remover Roupa</button>
          <Link to={`/updateProduct/${clothe.id}`}>
            <button>Editar roupa</button>
          </Link>
        </ContainerInfos>
      ))}
    </Container>
  );
}

export default Clothes;

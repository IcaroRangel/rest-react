import React from 'react';
import { Container, ContainerInfos } from './styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useClotheContext } from '../../context/ClotheContext';

function Clothes() {
  const url = 'http://localhost:3000/clothes';
  const { clothes, setClothes } = useClotheContext();

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await axios.get(url);
    const response = clothesResponse.data;
    setClothes(response);
  }, [setClothes]);

  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  const removeClothe = React.useCallback(
    async (id: number) => {
      await axios.delete(`${url}/${id}`);
      const deleteClothe = clothes.filter((clothe) => clothe.id !== id);
      setClothes([...deleteClothe]);
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
          <Link to="/putProducts">
            <button>Editar roupa</button>
          </Link>
        </ContainerInfos>
      ))}
    </Container>
  );
}

export default Clothes;

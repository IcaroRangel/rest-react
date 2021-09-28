import React from 'react';
import { Container, ContainerInfos } from './styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useClotheContext } from '../../context/ClotheContext';

function Clothes() {
  const { url } = useClotheContext();
  const { clothes, setClothes } = useClotheContext();

  const loadClothes = React.useCallback(async () => {
    const clothesResponse = await axios.get(url);
    const response = clothesResponse.data;
    setClothes(response);
  }, [setClothes, url]);

  React.useEffect(() => {
    loadClothes();
  }, [loadClothes]);

  const removeClothe = React.useCallback(
    async (id: number) => {
      await axios.delete(`${url}/${id}`);
      const deletedClothe = clothes.filter((clothe) => clothe.id !== id);
      setClothes([...deletedClothe]);
    },
    [clothes, setClothes, url],
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
            <button onClick={() => setClothes([clothe])}>Editar roupa</button>
          </Link>
        </ContainerInfos>
      ))}
    </Container>
  );
}

export default Clothes;

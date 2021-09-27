import React from 'react';
import { Container, ContainerInfos } from './styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}

function Clothes() {
  const url = 'http://localhost:3000/clothes';
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);

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

  const changeClothe = React.useCallback(async (e: any, id: number) => {
    e.preventDefault();
    await axios.put(`${url}/${id}`);
  }, []);

  return (
    <Container>
      <h1>Roupas</h1>
      <Link to="/newProduct">
        <button>Adicionar roupa</button>
      </Link>
      {clothes.map((clothe) => (
        <ContainerInfos key={clothe.id}>
          <form
            className="changeForm"
            onSubmit={(e: any) => {
              changeClothe(e.target.value, clothe.id);
            }}
          >
            <h4>{clothe.name}</h4>
            <input type="text" placeholder="Editar nome" />
            <p>{clothe.description}</p>
            <input type="text" placeholder="Editar descrição" />
            <p>
              Preço: R$
              {clothe.price}
            </p>
            <input type="text" placeholder="Editar preço" />
            <button>Enviar alterações</button>
          </form>
          <button onClick={() => removeClothe(clothe.id)}>Remover Roupa</button>
        </ContainerInfos>
      ))}
    </Container>
  );
}

export default Clothes;

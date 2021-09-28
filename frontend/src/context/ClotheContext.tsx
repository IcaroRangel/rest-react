import React, { createContext, ReactNode, useContext } from 'react';

interface ClotheContextData {
  clothes: ClotheProps[];
  setClothes: (clothes: ClotheProps[]) => void;
  url: string;
}

interface ClotheProviderProps {
  children: ReactNode;
}

interface ClotheProps {
  id: number;
  name: string;
  description: string;
  price: number;
}
const clotheContext = createContext({} as ClotheContextData);

export const ClotheProvider = ({ children }: ClotheProviderProps) => {
  const [clothes, setClothes] = React.useState<ClotheProps[]>([]);
  const url = 'http://localhost:3000/clothes';
  return (
    <clotheContext.Provider value={{ clothes, setClothes, url }}>
      {children}
    </clotheContext.Provider>
  );
};

export const useClotheContext = () => {
  const context = useContext(clotheContext);
  return context;
};

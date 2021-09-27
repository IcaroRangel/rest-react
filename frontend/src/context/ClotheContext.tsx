import React, { createContext, ReactNode, useContext } from 'react';

interface ClotheContextData {
  clothes: ClotheProps[];
  setClothes: (clothes: ClotheProps[]) => void;
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
  return (
    <clotheContext.Provider value={{ clothes, setClothes }}>
      {children}
    </clotheContext.Provider>
  );
};

export const useClotheContext = () => {
  const context = useContext(clotheContext);
  return context;
};

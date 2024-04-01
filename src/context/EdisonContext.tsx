import { ReactNode, createContext, useContext, useState } from "react";

type EdisonContextProviderProps = {
  children: ReactNode;
};

type EdisonContextType = {
  products: IProduct[] | undefined;
  setProduct: (data: IProduct[]) => void;
  modal: boolean;
  toggleModal: () => void;
  categoryId: number | null;
  handleSetCategoryId: (value: number) => void;
  currProducts: IProduct[];
  setCurrentProducts: (data: IProduct[]) => void;
};

// ============================================================

// context
const EdisonContext = createContext({} as EdisonContextType);

// hook
export function useEdisonContext() {
  return useContext(EdisonContext);
}

// ===========================================================

export function EdisonContextProvider({
  children,
}: EdisonContextProviderProps) {
  const [modal, setModal] = useState(false);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [products, setProducts] = useState<IProduct[] | undefined>();
  const [currProducts, setCurrProducts] = useState<IProduct[]>([]);

  function setProduct(data: IProduct[]) {
    setProducts([...data]);
  }

  function handleSetCategoryId(value: number) {
    setCategoryId(value);
  }

  function setCurrentProducts(data: IProduct[]) {
    setCurrProducts([...data]);
  }
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <EdisonContext.Provider
        value={{
          products,
          setProduct,
          modal,
          toggleModal,
          categoryId,
          handleSetCategoryId,
          currProducts,
          setCurrentProducts,
        }}
      >
        {children}
      </EdisonContext.Provider>
    </>
  );
}

"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchData } from "@/api/fetchData";

interface Product {
  image_1: string;
  Name: string;
  Title: string;
  Description: string;
  SKU: number;
  Quantity: number;
  size: string;
}

interface ProductContextProps {
  data: Product[];
}

const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const Data = await fetchData();
        if (Data) {
          setData(Data);
        }
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

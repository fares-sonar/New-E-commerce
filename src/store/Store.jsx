/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";
export const StoreCard = createContext();
const Store = ({ children }) => {
  const initialItem = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store"))
    : [];

  const filterData = localStorage.getItem("filter")
    ? JSON.parse(localStorage.getItem("filter"))
    : [];

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(filterData);
  const [cart, dispatch] = useReducer(CartReducer, initialItem);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const updateData = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setData(updateData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(cart));
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [cart, filter]);

  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const filtration = (cat) => {
    let filterData = data.filter((item) => item.category === cat);
    if (filterData.length == 0) {
      filterData = data;
    }
    setFilter(filterData);
  };
  return (
    <StoreCard.Provider
      value={{
        cart,
        data,
        filter,
        truncateText,
        filtration,
        dispatch,
      }}
    >
      {children}
    </StoreCard.Provider>
  );
};
export default Store;

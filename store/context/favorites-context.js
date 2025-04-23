import { createContext } from 'react';
import { useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {
  },
  removeFavorite: (id) => {
  },
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealIds((prev) => [...prev, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealIds((prev) => prev.filter(meal => meal.id === id));
  };

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
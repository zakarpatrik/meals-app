import { createContext } from 'react';
import FavoritesScreen from '../../screens/FavoritesScreen';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {
  },
  removeFavorite: (id) => {
  },
});

const FavoritesContextProvider = ({ children }) => {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
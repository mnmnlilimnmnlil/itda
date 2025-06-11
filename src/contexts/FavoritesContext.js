import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => {
    return favorites.some((dog) => dog.id === id);
  };

  const addToFavorites = (dog) => {
    if (!isFavorite(dog.id)) {
      setFavorites((prev) => [...prev, dog]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((dog) => dog.id !== id));
  };

  const value = {
    favorites,
    isFavorite,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

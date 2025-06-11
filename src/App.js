import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DogsPage from "./pages/DogsPage";
import DogDetailPage from "./pages/DogDetailPage";
import StorePage from "./pages/StorePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import StoriesPage from "./pages/StoriesPage";
import VolunteerPage from "./pages/VolunteerPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <FavoritesProvider>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/dogs/:id" element={<DogDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/store/:id" element={<ProductDetailPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
        </Routes>
      </main>
      <Footer />
    </FavoritesProvider>
  );
}

export default App;

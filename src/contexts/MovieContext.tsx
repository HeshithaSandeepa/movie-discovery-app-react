import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { Movie } from "../components/MovieCard";

//Define the context type
interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

//  Create the context with proper type
const MovieContext = createContext<MovieContextType | undefined>(undefined);

// Custom hook
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

// MovieProvider Props
interface MovieProviderProps {
  children: ReactNode;
}

export const MovieProvider = ({ children }: MovieProviderProps) => {

  // Initialize state with localStorage data immediately
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    if (typeof window !== 'undefined') { // Check for SSR
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
    return [];
  });


  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //not work properly 
  // useEffect(() => {
  //   const storedFavorites = localStorage.getItem("favorites");
  //   if (storedFavorites) {
  //     setFavorites(JSON.parse(storedFavorites));
  //   }
  // }, []);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value: MovieContextType = {
    favorites,
    addToFavorites,
    removeFavorites,
    isFavorite,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};

import { createContext, useContext } from "react";

export const StarWarsContext = createContext(null);

export const useStarWars = () => {
  const context = useContext(StarWarsContext);
  if (!context) {
    throw new Error("useStarWars must be used within a StarWarsProvider");
  }
  return context;
};

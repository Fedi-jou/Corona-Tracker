import { createContext } from " react";

const CountryContext = createContext();

export const CountryProvider = () => {
  return <CountryContext.Provider></CountryContext.Provider>;
};

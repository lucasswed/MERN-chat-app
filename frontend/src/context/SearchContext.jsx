import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

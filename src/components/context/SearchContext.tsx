import React from "react";
import { useState } from "react";

export const SearchContext = React.createContext({
  search: "",
  setSearch: (_search: string) => {},
})

export const useSearch = () => React.useContext(SearchContext)

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [search, setSearch] = useState("")
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

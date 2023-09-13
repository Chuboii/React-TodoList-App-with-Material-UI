import { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();

function getItem() {
  let item = localStorage.getItem('todos');
  return item ? JSON.parse(item) : [];
}

export function DataProvider({ children }) {
  const [data, setData] = useState(getItem)
  let [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

 

  return (
    <DataContext.Provider value={{ data, setData, setSearchValue, searchValue}}>
      {children}
    </DataContext.Provider>
  );
}

export function UseData() {
  return useContext(DataContext);
}

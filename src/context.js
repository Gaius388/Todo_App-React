import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState("");
  const [lists, setLists] = useState([]);
  const [check, setCheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos) {
      const actions = { id: new Date().getTime().toString(), todos };
      setLists((lists) => {
        return [...lists, actions];
      });
      setTodos("");
    }
  };

  const removeItem = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const handleCheck = (id) => {
    setCheck(!check);
  };

  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        lists,
        check,
        setCheck,
        handleSubmit,
        removeItem,
        handleCheck,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

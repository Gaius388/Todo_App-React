import React from "react";
import { useGlobalContext } from "./context";

const List = () => {
  const { lists, removeItem } = useGlobalContext();
  return (
    <>
      {lists.map((list) => {
        const { id, todos } = list;
        return (
          <div className="todo__addition" key={id}>
            <Click />
            <p className="todo__points">{todos}</p>
            <p className="cancelX" onClick={() => removeItem(id)}></p>
          </div>
        );
      })}
    </>
  );
};

const Click = () => {
  const { check, handleCheck } = useGlobalContext();
  console.log(check);
  return (
    <div
      className={check ? "check" : "uncheck"}
      onClick={() => handleCheck()}
    ></div>
  );
};
export default List;

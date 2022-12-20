import React, { useState } from "react";
import List from "./List";
import icon_moon from "./images/icon-moon.svg";
import icon_sun from "./images/icon-sun.svg";
import { useGlobalContext } from "./context";

const Todo = () => {
  const { todos, lists, setTodos, handleSubmit } =
    useGlobalContext();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "container theme__2" : "container theme__1"}>
      <div className="top__level">
        <div className="top__portion">
          <div className="todo__header">
            <h1>TODO</h1>
            <span>
              <img
                onClick={() => setDarkMode(!darkMode)}
                src={darkMode ? icon_sun : icon_moon}
                alt="icon-moon"
                className="icon__img"
              />
            </span>
          </div>
          <form className="todo__input" onSubmit={handleSubmit}>
            <div className="circle1"></div>
            <input
              type="text"
              className="input"
              placeholder="Create a new todo..."
              value={todos}
              onChange={(e) => setTodos(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="bottom__level">
        <div className="todo__list" id="list">
          <List />
          <div className="todo__functionality">
            <p className="counter">{lists.length} items left</p>
            <div className="function__list">
              <p className="all">All</p>
              <p className="active">Active</p>
              <p className="completed">Completed</p>
            </div>
            <p className="clear">Clear Completed</p>
          </div>
        </div>
        <p className="drag_drop">Drag and drop to reorder list</p>
      </div>
    </div>
  );
};

export default Todo;

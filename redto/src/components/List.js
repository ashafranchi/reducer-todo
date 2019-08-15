import React from "react";
import Todo from "./Todo";

const List = props => {
  console.log("props :", props);
  return (
    <div>
      <h2>TodoList</h2>
      {props.items.map(item => (
        <Todo todo={item} toggle={props.toggle} delete={props.delete} />
      ))}
      <button onClick={props.clear}>Clear Completed todos</button>
    </div>
  );
};

export default List;

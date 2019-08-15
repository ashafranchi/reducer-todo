import React, { useReducer } from "react";
import "./App.css";

//components
import ListForm from "./components/ListForm";
import List from "./components/List";

//reducer
import { initialState, reducer } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  const addNew = todo => {
    console.log("fire");
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggle = id => {
    console.log("toggle fire");
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const deleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <ListForm addTodo={addNew} />
      <List
        items={state.todos}
        toggle={toggle}
        clear={clear}
        delete={deleteTodo}
      />
    </div>
  );
}

export default App;

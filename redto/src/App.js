import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { reducer, initalState } from "../reducers/reducer";

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (e, item) => {
        e.preventDefault();
        dispatch({type: "ADD_ITEM", payload: item});
    };

    const toggleItem = itemId => {
        dispatch({type: "TOGGLE_ITEM", payload: itemID});
    };
    const clearPurchased = e => {
        e.preventDefault();
        dispatch({type: "CLEAR_PURCHASES"});
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

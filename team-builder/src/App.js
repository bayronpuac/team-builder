import React, {useState} from 'react';
import ListForm from "./Components/ListForm";
import List from "./Components/List";

import './App.css';

function App() {

  const [list, setList] = useState ({});

  const addNewList = list => {
    const newList = {
      id: Date.now(),
      name: list.name,
      email: list.email,
      role: list.role
    };
    setList([...list, newList]);
  };
  return (
    <div className="App">
      <h1>My Notes</h1>
      <ListForm addNewList={addNewList} />
      <List list={list} />
    </div>
  );
}

export default App;

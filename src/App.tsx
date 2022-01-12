import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Containers/t1';
import MyForm from './Containers/t2';
import TodoContainer from './Containers/TodoContainer';
import TestHook from './Containers/t3';

function App() {
  const dataTodo = [
    { id: 1, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  const me = {
    name: "Fermi",
    job: "Developer",
    startYear: 2022,
    todo: dataTodo
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoContainer author={me} />
      <hr />
      <Counter />
      <hr />
      <MyForm />
      <hr />
      <TestHook />
      <hr />
    </div>
  );
}

export default App;

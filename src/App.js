import logo from './logo.svg';
import React from 'react';
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <AddTask />
     <TaskList/>
    </div>
  );
}

export default App;

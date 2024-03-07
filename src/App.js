// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';


// function Header() {
//   return <h1>Hello World</h1>;
// }


function App(props) {
  return (
    <div>
      <Header name="Zihan" color="purple" object="Object" />
      <Main />
      <Sidebar />
    </div>
  );
};

export default App;

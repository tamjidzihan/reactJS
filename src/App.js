// import logo from './logo.svg';
import React from 'react';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
import Button from './components/Button';
import butterfly from './images/python.png';
import './App.css';


// function Header() {
//   return <h1>Hello World</h1>;
// }




function Logo(props) {
  const butterflyLogo = <img src={butterfly} alt='butterfly' />;
  return butterflyLogo;
}



function App(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <Button />
      <Logo />
    </div>
  );
};

export default App;

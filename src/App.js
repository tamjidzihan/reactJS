// import logo from './logo.svg';
import React from 'react';
// import Header from './components/Header';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
import Date from './components/Date'
import Promo from './components/Promo'
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

const discount = {
  heading: "99% off all items!",
  callToAction: "Everything must go!"
};



function App(props) {
  const [date, setDate] = React.useState('Priv Date')

  function handelClick() {
    setDate('Real Date')
  }

  return (
    <div>
      <h1><i>From App Parent:</i> {props.titleHeading}</h1>
      <h2><i>From App Parent:</i> {props.titleBody}</h2>


      <div>
        <Date
          date={date}
        />
        <button onClick={handelClick}>Click Here</button>
      </div>

      <Promo
        heading={discount.heading}
        callToAction={discount.callToAction}
      />
      <Button />
      <Logo />
    </div>
  );
};

export default App;

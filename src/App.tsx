// import './App.css'
import { useState } from 'react';
import ListGroup from './components/ListGroup';

function App() {

  let divisions = {
    items: [
      'Dhaka',
      'Rajsahi',
      'Khulna',
      'Barishal',
      'Rangpur'
    ],
    heading: 'Divisions of bangladesh',
    total: 6
  }

  interface DivisionDetail {
    [key: string]: {
      capital: string;
      largestCity: string;
      otherMajorCities: string;
      description: string;
    };
  }
  let divisionDetail: DivisionDetail = {
    'Dhaka': {
      capital: "Dhaka",
      largestCity: "Dhaka",
      otherMajorCities: "Gazipur, Narayanganj",
      description: "Dhaka Division is the most populous and economically significant division in Bangladesh. It is the political, cultural, and economic center of the country."
    },
    'Rajshahi': {
      capital: "Rajshahi",
      largestCity: "Rajshahi",
      otherMajorCities: "Bogura, Pabna",
      description: "Rajshahi Division is known for its agricultural production, particularly mangoes and silk. It is located in the northwest of Bangladesh."
    },
    'Khulna': {
      capital: "Khulna",
      largestCity: "Khulna",
      otherMajorCities: "Jessore, Satkhira",
      description: "Khulna Division is an important industrial and commercial hub, particularly known for its shrimp farming and jute industries. It is situated in the southwestern part of Bangladesh."
    },
    'Barishal': {
      capital: "Barishal",
      largestCity: "Barishal",
      otherMajorCities: "Patuakhali, Jhalokati",
      description: "Barishal Division is characterized by its numerous rivers and waterways, earning it the nickname 'Venice of the East.' It is located in the southern part of Bangladesh."
    },
    'Rangpur': {
      capital: "Rangpur",
      largestCity: "Rangpur",
      otherMajorCities: "Dinajpur, Thakurgaon",
      description: "Rangpur Division is primarily an agricultural region known for its production of crops like rice, wheat, and potatoes. It is situated in the northern part of Bangladesh."
    }
  };

  let seasons = {
    items: [
      'Summer',
      'The rainy-season',
      'The autumn',
      'Late-autumn',
      'Winter',
      'Spring'
    ],
    heading: 'seasons of bangladesh',
    total: 6
  }



  let seasonDetail = {
    'Summer': {
      description: "Summer in Bangladesh is characterized by hot and humid weather. It typically lasts from March to May, with temperatures often reaching high levels."
    },
    'The rainy-season': {
      description: "The rainy season, also known as monsoon season, occurs from June to September in Bangladesh. Heavy rainfall is common during this time, which is vital for agriculture but also brings flooding in some areas."
    },
    'The autumn': {
      description: "Autumn in Bangladesh, also known as the post-monsoon season, extends from October to November. It is characterized by milder temperatures and decreasing rainfall, making it a pleasant time of the year."
    },
    'Late-autumn': {
      description: "Late autumn, occurring in November, marks the transition period between autumn and winter. Temperatures begin to drop, and the weather becomes cooler."
    },
    'Winter': {
      description: "Winter in Bangladesh lasts from December to February. It is characterized by cool and dry weather, with temperatures dropping significantly, particularly in the northern regions."
    },
    'Spring': {
      description: "Spring in Bangladesh, also known as the pre-monsoon season, occurs from February to March. It is a transitional period between winter and summer, with temperatures gradually rising and vegetation blooming."
    }
  };

  const [selectedDivision, setSelectedDivision] = useState('');

  const handelSelectItem = (item: string) => {
    setSelectedDivision(item);
  }

  { console.log(divisionDetail[selectedDivision]) }

  // let selectedDivisionDetail = divisionDetail[selectedDivision];

  return (
    <>
      <div className=' mb-4 '>
        <ListGroup
          items={divisions.items}
          heading={divisions.heading}
          total={divisions.total}
          detail={divisionDetail.Dhaka}

          onSelectItem={handelSelectItem} />
      </div>
      {/* <div >
        <ListGroup
          items={seasons.items}
          heading={seasons.heading}
          total={seasons.total}
          onSelectItem={(item: string) => {
            console.log(item)
          }}
        />
      </div> */}
    </>
  )
}

export default App

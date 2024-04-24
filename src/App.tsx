// import './App.css'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";

import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import AlertButton from './components/AlertButton';

function App() {

  let divisions = {
    items: [
      'Dhaka',
      'Rajshahi',
      'Khulna',
      'Barishal',
      'Rangpur'
    ],
    heading: 'Divisions of bangladesh',
    total: 6
  }

  interface DivisionDetail {
    [key: string]: {
      description: string
    }
  }

  let divisionDetail: DivisionDetail = {
    'Dhaka': {
      description: "Dhaka Division is the most populous and economically significant division in Bangladesh. It is the political, cultural, and economic center of the country."
    }
    ,
    'Rajshahi': {
      description: "Rajshahi Division is known for its agricultural production, particularly mangoes and silk. It is located in the northwest of Bangladesh."
    }
    ,
    'Khulna': {
      description: "Khulna Division is an important industrial and commercial hub, particularly known for its shrimp farming and jute industries. It is situated in the southwestern part of Bangladesh."
    }
    ,
    'Barishal': {
      description: "Barishal Division is characterized by its numerous rivers and waterways, earning it the nickname 'Venice of the East.' It is located in the southern part of Bangladesh."
    }
    ,
    'Rangpur': {
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
  };

  interface SeasonDetail {
    [key: string]: {
      description: string;
    };
  }

  let seasonDetail: SeasonDetail = {
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


  let weekdays = {
    items: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    heading: 'Days of the Weeks',
    total: 7

  }

  interface WeekdaysDetail {
    [key: string]: {
      description: string
    };
  }

  let weekdayDetail: WeekdaysDetail = {
    'Sunday': {
      description: "The first day of the week in many cultures, traditionally considered a day of rest."
    },
    'Monday': {
      description: "The second day of the week, following Sunday."
    },
    'Tuesday': {
      description: "The third day of the week, following Monday."
    },
    'Wednesday': {
      description: "The fourth day of the week, following Tuesday."
    },
    'Thursday': {
      description: "The fifth day of the week, following Wednesday."
    },
    'Friday': {
      description: "The sixth day of the week, following Thursday."
    },
    'Saturday': {
      description: "The seventh day of the week, following Friday. In many cultures, it is considered the last day of the week."
    }
  };


  const [selectedDivision, setSelectedDivision] = useState('Dhaka');

  // const handelSelectdivision = (item: string) => {
  //   setSelectedDivision(item);
  // }


  const [selectedSeason, setselectedSeason] = useState('Summer');

  const handelSelectSeason = (item: string) => {
    setselectedSeason(item);
  }


  const [selectedWeekday, setselectedWeekday] = useState('Sunday');

  const handelSelectweeks = (items: string) => {
    setselectedWeekday(items)
  }



  const button = {
    subscribe: 'Subscribe',
    subscribed: 'Subscribed',
  }

  const [selectedButton, setSelectedButton] = useState(button.subscribe)

  const handelButtonClick = () => {
    setSelectedButton(button.subscribed)
  }



  const [alertVisible, SetAlertVisibility] = useState(false)









  return (

    <>


      <FaUser color='green' size={50} />
      <FaUserNurse />






      <div className=' container text-center '>
        {alertVisible && <Alert onClose={() => SetAlertVisibility(false)}>The Button Is Clicked </Alert>}
        <AlertButton
          onClick={() =>
            SetAlertVisibility(true)
            //
          }
        />
      </div>

      {/* <div>
        <Button

          children={selectedButton}
          style='danger'
          onClick={handelButtonClick}
        />
      </div> */}

      {/* <div>
        <Alert>
          <span className=' fw-bold '>Hello</span> world
        </Alert>
      </div>
      <div className=' pb-5 '>
        <ListGroup
          items={divisions.items}
          heading={divisions.heading}
          total={divisions.total}
          seleceted={selectedDivision}
          detail={divisionDetail[selectedDivision]}
          onSelectItem={(item: string) => setSelectedDivision(item)}
        />
      </div>
      <div className=' pb-5 '>
        <ListGroup
          items={seasons.items}
          heading={seasons.heading}
          total={seasons.total}
          seleceted={selectedSeason}
          detail={seasonDetail[selectedSeason]}
          onSelectItem={handelSelectSeason}
        />
      </div>
      <div className=' pb-5'>
        <ListGroup
          items={weekdays.items}
          heading={weekdays.heading}
          total={weekdays.total}
          seleceted={selectedWeekday}
          detail={weekdayDetail[selectedWeekday]}
          onSelectItem={handelSelectweeks}
        />
      </div> */}
    </>
  )
}

export default App

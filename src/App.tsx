// import './App.css'
import { useEffect, useRef, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa";
import produce from 'immer';

import Navbar from './components/Navbar';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import AlertButton from './components/AlertButton';
import Message from './components/Message';
import Cart from './components/Cart';
import FormsUseRef from './components/FormsUseRef'
import FormsUseState from './components/FormsUseState';
import FormsUseForm from './components/FormsUseForm';
import FormValidation from './components/FormValidation';
import FormValidationWithZod from './components/FormValidationWithZod';
import SubmitButtonDisable from './components/SubmitButtonDisable';
import Project from './components/ProjectForm';
import ProjectForm from './components/ProjectForm';
import ProjectTable from './components/ProjectTable';
import ProductList from './components/ProductList';
import axios, { Axios, AxiosError, CanceledError } from 'axios';




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


  // const [drink, setDrink] = useState({
  //   title: "Americano",
  //   price: 5
  // });

  // const handleClick = () => {
  //   const newDrink = {
  //     ...drink,
  //     price: 6
  //   };
  //   setDrink(newDrink);
  // }


  const [customer, setCustomer] = useState({
    name: 'zihan',
    age: 30,
    address: {
      city: 'dhaka',
      postcode: 1212
    }
  })


  const handleClick = () => {
    setCustomer({
      ...customer,
      age: 31,
      address: {
        ...customer.address,
        city: 'Rajshahi'
      }
    })
  }


  const [jobs, setJobs] = useState(
    ['Teacher', 'Technician', 'Driver']
  )

  const addJobsClick = () => {
    setJobs([...jobs, 'Cleaner'])
  }
  const removeJobsClick = () => {
    setJobs([...jobs.filter(job =>
      job !== jobs[0]
    )])
  }
  const updateJobsClick = () => {
    setJobs(jobs.map((job, index) =>
      job === 'Driver' ? 'Manager' : job
    ))
  };





  const [cartItems, setCartItems] = useState(['Product1', 'Product2', 'Product3', 'Product4', 'Product5', 'Product6', 'Product7', 'Product8'])

  const handleCartClear = () => {
    setCartItems([])
  }



  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'Zihan'
    }
  })

  const handleClickChange = () => {
    setGame({
      ...game,
      player: {
        ...game.player,
        name: "Bob"
      }
    })
  }

  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ["Mushroom"]
  })

  const handleAddPizzaClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, 'cheese']
    })
  }

  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 }
    ]
  })


  const handleChangeQuantityClick = () => {
    setCart({
      ...cart,
      items: cart.items.map(item => item.id === 1 ? {
        ...item,
        quantity: 2
      } : item)
    })
  }


  const [bugs, setBugs] = useState([
    { id: 1, title: 'Bug 1', fixed: false },
    { id: 2, title: 'Bug 2', fixed: false }
  ]);

  const handleClickButton1 = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {
      ...bug, fixed: true
    } : bug));
  };
  const handleClickButton2 = () => {
    setBugs(produce(drft => {
      const bug = drft.find(bug => bug.id === 2);
      if (bug) bug.fixed = true
    }));
  };





  interface Expenses {
    id: number;
    description: string;
    amount: number;
    catagory: string;
  }

  const [expenses, setExpenses] = useState<Expenses[]>([])

  const hanndleDelete = (id: number) => {
    setExpenses(
      expenses.filter(expense => expense.id !== id)
    )
  }






  // const ref = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   if (ref.current) ref.current.focus()
  // })
  // useEffect(() => {
  //   document.title = 'React App'
  // })



  // const [catagory, setCtagory] = useState('')

  // const connect = () => console.log("connecting....");
  // const disconnect = () => console.log('disconnecting....');


  // useEffect(() => {
  //   connect()

  //   return () => disconnect()
  // })


  interface User {
    id: number;
    username: string;
    name: string;
    phone: string;
    email: string;
    website: string;
    address: {
      city: string;
      geo: {
        lat: string;
        lng: string;
      };
      street: string;
      suite: string;
      zipcode: string;
    };
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    }
  }


  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)



  // const featchUser = async () => {
  //   try {
  //     const res = await axios
  //       .get<User[]>('https://jsonplaceholder.typicode.com/users')
  //     setUsers(res.data)
  //   }
  //   catch (err) {
  //     setError((err as AxiosError).message)
  //   }
  // }
  // useEffect(() => { featchUser() }, [])



  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
      .then(res => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      })
    // .finally(() => {
    //   setLoading(false)
    // })
    return () => controller.abort()
  }, [])


  const [selecetedUser, setSelecetedUser] = useState<User[]>()

  return (
    <>
      {/* <div className=' container my-4 ' >
        <select
          className='form-select'
          onChange={event =>
            setSelecetedUser(
              users.filter(user =>
                user.id.toString() === event.target.value
              )
            )}>
          <option value="">...</option>
          {users.map(user =>
            <option key={user.id} value={user.id}>{user.name}</option>
          )}
        </select>
      </div>
      {error && <p className=' text-danger lead text-center my-5'>{error}</p>}
      {isLoading && <div className='text-center '>
        <div className="spinner-border text-danger my-5 " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>}

      {selecetedUser?.map((user, index) =>
        <section key={user.id} style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 ">
            <h5 className="my-3 text-center ">User: {index + 1}</h5>
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                      className="rounded-circle img-fluid" style={{ width: "150px" }} />
                    <h5 className="my-3">{user.username}</h5>
                    <p className="text-muted mb-1">{user.company.catchPhrase}</p>
                    <p className="text-muted mb-4">
                      {user.address.street}
                      {user.address.suite}
                      {user.address.city}</p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" data-mdb-button-init data-mdb-ripple-init
                        className="btn btn-primary">Follow</button>
                      <button type="button" data-mdb-button-init data-mdb-ripple-init
                        className="btn btn-outline-primary ms-1">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.name}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.phone}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Website</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.website}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.address.street}, {user.address.city}</p>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Conpany</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.company.name}, {user.company.bs}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )} */}





      {/* <div className=' container mt-5'>
        <select className="form-select" onChange={(e) => {
          setCtagory(e.target.value)
        }}>
          <option value="">Open this select menu</option>
          <option value="Milk">Milk</option>
          <option value="Shirt">Shirt</option>
        </select>
        <ProductList catagory={catagory} />
      </div> */}


      {/* <form className='container my-5'>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input ref={ref} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}












      {/* <ProjectForm
        onSubmitForm={data =>
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
        }
      />

      <ProjectTable
        expenses={expenses}
        onDelete={hanndleDelete}
      /> */}

      {/* <SubmitButtonDisable /> */}

      {/* <FormValidationWithZod /> */}

      {/* <FormValidation /> */}

      {/* <FormsUseForm /> */}

      {/* <FormsUseState /> */}

      {/* <FormsUseRef /> */}

      {/* <div>{cart.items.map(item =>
        <ul>
          <li>ID: {item.id}</li>
          <li>Title: {item.title}</li>
          <li>Quantity: {item.quantity}</li>
        </ul>
      )}
        <button className=' btn btn-primary ' onClick={handleChangeQuantityClick}>Change Quantity</button>
      </div> */}



      {/* <div className="container my-4">
        <p className="lead">Pizza</p>
        <p>Name: {pizza.name}</p>
        <p>Pizza Toppings:</p>
        <ul className="list-group">
          {pizza.toppings.map(item =>
            <li className='list-group-item rounded-4  '>{item}</li>
          )}
        </ul>
        <button className=' btn btn-primary my-3' onClick={handleAddPizzaClick}>Add Pizza Toppings</button>
      </div> */}



      {/* <div className=' container my-4'>
        <p className=' lead '> Player Detail</p>
        <p>Player ID :{game.id}</p>
        <p>Name: {game.player.name}</p>
        <button className=' btn btn-primary ' onClick={handleClickChange}>Change Player Name</button>
      </div> */}

      {/* <Navbar
        cartitemsCount={cartItems.length}
      />
      <Cart
        cartItems={cartItems}
        onClear={handleCartClear}
      /> */}

      {/* 
      <div className=' container mt-4'>
        <div className=' my-3 '>
          {bugs.map((bug, index) =>
            <div key={bug.id}>
              <p className=' lead '>Bug {index + 1}</p>
              <p>id: {bug.id}</p>
              <p>Title:  {bug.title}</p>
              <p>Status:  {bug.fixed.toString()}</p>
            </div>
          )}


          <button className=' btn btn-primary ' onClick={handleClickButton1}>Fix Bug</button>
        </div>
        <div className=' my-3 '>
          <p className=' lead '>Bug 2</p>
          <p>id: {bugs[1].id}</p>
          <p>Title:  {bugs[1].title}</p>
          <p>Status:  {bugs[1].fixed.toString()}</p>
          <button className=' btn btn-primary ' onClick={handleClickButton2}>Fix Bug 2</button>
        </div>
      </div> */}



      {/* <div className=' container mt-4'>
        <p>{drink.title + ' ' + drink.price}</p>
        <button className=' btn btn-primary ' onClick={handleClick}>Click ME</button>
      </div> */}

      {/* <div className=' container mt-4'>
        <p>Name: {customer.name}</p>
        <p>Age: {customer.age}</p>
        <p>City: {customer.address.city}</p>
        <p>Post Code:{customer.address.postcode}</p>
        <button className=' btn btn-primary ' onClick={handleClick}>Click ME</button>
      </div>


      <div className=' container mt-4'>
        {jobs.map((job, index) =>
          <p><span>{index + 1}: </span>{job}</p>
        )}
        <button type="button" className=' btn btn-success btn-block' onClick={addJobsClick}>Add Jobs</button>
        <button type="button" className=' btn btn-danger btn-block' onClick={removeJobsClick}>Remove Jobs</button>
        <button type="button" className=' btn btn-warning btn-block' onClick={updateJobsClick}>Update Jobs</button>

      </div> */}



      {/* <div className=' container text-center '>

        {alertVisible && <Alert onClose={() => {
          SetAlertVisibility(false)
        }}>The Button has been Clicked </Alert>}

        <AlertButton
          onClick={() => {
            SetAlertVisibility(true)

          }
          }
        />
      </div > */}


      {/* <Message />
        <Message />
        <Message /> */}


      {/* <FaUser color='green' size={50} />
          <FaUserNurse />
     */}



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

// import './App.css'
import ListGroup from './components/ListGroup';

function App() {

  let districts = {
    items: [
      'Dhaka',
      'Rajsahi',
      'Khulna',
      'Barishal',
      'Rangpur'
    ],
    heading: 'Districts of bangladesh'
  }

  let seasons = {
    items: [
      'Summer',
      'The rainy-season',
      'The autumn',
      'Late-autumn',
      'Winter',
      'Spring'
    ],
    heading: 'seasons of bangladesh'
  }


  return (
    <>
      <div className=' mb-4 '>
        <ListGroup
          items={districts.items}
          heading={districts.heading}
          onSelectItem={(item: string) => {
            console.log(item)
          }} />
      </div>
      <div >
        <ListGroup
          items={seasons.items}
          heading={seasons.heading}
          onSelectItem={(item: string) => {
            console.log(item)
          }}
        />
      </div>
    </>
  )
}

export default App

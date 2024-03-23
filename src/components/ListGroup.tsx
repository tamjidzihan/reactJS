import { MouseEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'



function ListGroup() {

    let items = [
        'Dhaka',
        'Rajsahi',
        'Khulna',
        'Barishal',
        'Rangpur'
    ];
    items = [];

    const [selecetedIndex, setSelecetedIndex] = useState(-1)
    console.log(selecetedIndex);
    // console.log(setSelecetedIndex);

    // const handleClick = (e: MouseEvent) => console.log(e);


    const listItems = items.map((item, index) =>
        <li
            className={selecetedIndex === index
                ? "list-group-item text-start active"
                : "list-group-item text-start "} role='button'
            key={item}
            // onClick={() => console.log(index, item)}
            onClick={() => setSelecetedIndex(index)}
        >
            {index + 1}: {item}
        </li>
    )


    return (
        <>
            <div className='container my-2 fadeUpDown'>
                <h1 className=' rounded-5  fw-bold text-center text-white  text-uppercase bg-primary '>Districts of bangladesh</h1>
                {items.length === 0 && <p className=' display-6 text-center  '>No item Found</p>}
                <ul className="list-group">{listItems}
                    {/* <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li> */}
                </ul>
            </div >
        </>
    );
}

export default ListGroup;

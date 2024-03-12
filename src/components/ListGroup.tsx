import React from 'react'
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



    return (
        <>
            <div className='container my-2'>
                <h1 className=' fw-light text-center '>List</h1>
                {items.length === 0 && <p className=' display-6 text-center  '>No item Found</p>}
                <ul className="list-group">

                    {
                        items.map(items =>
                            <li key={items} className="list-group-item">{items}</li>
                        )}
                    {/* <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li> */}
                </ul>
            </div>
        </>
    );
}

export default ListGroup;

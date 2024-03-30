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
    // items = [];

    const [selecetedIndex, setSelecetedIndex] = useState(-1)
    console.log(selecetedIndex);
    // console.log(setSelecetedIndex);

    // const handleClick = (e: MouseEvent) => console.log(e);

    return (
        <>
            <div className='container my-2'>
                <h1 className=' fw-light text-center '>List</h1>
                {items.length === 0 && <p className=' display-6 text-center  '>No item Found</p>}
                <ul className="list-group">
                    {
                        items.map((item, index) =>
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
                    }
                    {/* <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li> */}
                </ul>
                <div>
                    <table className="table table-striped text-center my-5">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Divisions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item}</td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}

export default ListGroup;

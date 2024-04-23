import { MouseEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


interface Props {
    items: string[];
    heading: string;
    total: number;
    seleceted: string;
    detail: {
        description: string;
    };
    onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, total, seleceted, detail, onSelectItem }: Props) {

    const [selecetedIndex, setSelecetedIndex] = useState(0)
    // console.log(setSelecetedIndex);
    // const handleClick = (e: MouseEvent) => console.log(e);

    const listItems = items.map((item, index) =>
        <li className={selecetedIndex === index
            ? "list-group-item text-start active"
            : "list-group-item text-start "}
            role='button'
            key={item}
            // onClick={() => console.log(index, item)}
            onClick={() => {
                setSelecetedIndex(index)
                onSelectItem(item)
            }
            }
        >
            {index + 1}: {item}
        </li >
    )

    return (
        <>
            <div className='container my-2'>
                <h1 className=' rounded-5 fw-bold text-center text-white text-uppercase bg-primary '>{heading}</h1>
                <div>
                    <h3>Description:</h3>
                    <p>{detail.description}</p>
                </div>
                <div className='col'>
                    <div className='row justify-content-center align-items-end  text-center '>
                        <p className=' lead col-5 '><span className=' fw-bold '>In Total: </span>{total}</p>
                        <p className=' lead col-5 '><span className=' fw-bold '>Seleceted: </span>{seleceted}</p>
                    </div>
                </div>
                {items.length === 0
                    && <p className=' display-6 text-center'>No item Found</p>
                }
                <ul className="list-group">
                    {listItems}
                </ul>

                <div>
                    <table className="table table-striped text-center my-5">
                        <thead className="thead-dark">
                            <tr>
                                <th className='rounded-5 fw-bold text-center text-white text-uppercase bg-primary' colSpan={2}>
                                    {heading}
                                    <span className=' bg-danger p-2 rounded-5'>On Table</span>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Divisions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={item}>
                                    <th scope="row">{index + 1}</th>
                                    <td >{item}</td>
                                </tr>
                            ))
                            }

                        </tbody>
                    </table>
                </div>
                <p className='py-3 text-center '>~~~~~~~~~~~~~~~~~~New Section Starts~~~~~~~~~~~~~~~~~~~~</p>
            </div >
        </>
    );
}

export default ListGroup;

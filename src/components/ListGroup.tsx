import { MouseEvent, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


interface ListProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}


function ListGroup({ items, heading, onSelectItem }: ListProps) {


    // items = [];


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
                <h1 className=' rounded-5  fw-bold text-center text-white  text-uppercase bg-primary '>{heading}</h1>
                {items.length === 0
                    && <p className=' display-6 text-center  '>No item Found</p>
                }
                <ul className="list-group">
                    {listItems}
                </ul>
            </div >
        </>
    );
}

export default ListGroup;

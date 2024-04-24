import React, { useState } from 'react'

const Button = () => {
    const [selecetedButton, setSelecetedButton] = useState("btn btn-secondary");




    // const listItems = items.map((item, index) =>
    //     <li className={selecetedIndex === index
    //         ? "list-group-item text-start active"
    //         : "list-group-item text-start "}
    //         role='button'
    //         key={item}
    //         // onClick={() => console.log(index, item)}
    //         onClick={() => {
    //             setSelecetedIndex(index)
    //             onSelectItem(item)
    //         }
    //         }
    //     >
    //         {index + 1}: {item}
    //     </li >


    return (

        <div className=' container-fluid text-center my-5 '>
            <button className={selecetedButton}
                onClick={() => setSelecetedButton("btn btn-danger ")}
            >Subscribe</button>
        </div>

    )
}

export default Button

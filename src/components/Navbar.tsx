import React from 'react'


interface Props {
    cartitemsCount: number
}


function Navbar({ cartitemsCount }: Props) {
    return (
        <div className=' container mt-3  '>
            <p>NavBar</p>
            <p>Cart:  {cartitemsCount}</p>
        </div>
    )
}

export default Navbar

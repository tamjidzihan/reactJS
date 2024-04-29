import React from 'react'


interface Props {
    cartitemsCount: number
}


function Navbar({ cartitemsCount }: Props) {
    return (
        <div>
            NavBar : {cartitemsCount}
        </div>
    )
}

export default Navbar

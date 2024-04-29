import React from 'react'

interface Props {
    cartItems: string[],
    onClear: () => void
}

function Cart({ cartItems, onClear }: Props) {
    return (
        <>

            <div className="container">
                <h2>Cart Items:</h2>
                {cartItems.length === 0 && <p>No cart Item found</p>}
                <ul className="list-group">
                    {cartItems.map(item =>
                        <li className="list-group-item" key={item}>{item}</li>
                    )}
                </ul>
                <button className=' btn btn-warning my-3' onClick={onClear}>Clear Cart</button>


            </div>
        </>
    )
}

export default Cart

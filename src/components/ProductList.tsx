import React, { useEffect, useState } from 'react'

function ProductList() {
    const [prodects, setProducts] = useState<string[]>([])
    const [catagory, setCatagory] = useState('')

    useEffect(() => {
        console.log('Fetching Prodects ' + catagory);
        setProducts(['Clothing', 'HouseHold'])
    }, [])

    return (
        <>
            <select onChange={(event) => useState(event.target.value)} className="form-select container " aria-label="Default select example">
                <option value="">Open this select menu</option>
                <option value="Clothing">Clothing</option>
                <option value="HouseHold">House Hold</option>
            </select>
        </>
    )
}

export default ProductList

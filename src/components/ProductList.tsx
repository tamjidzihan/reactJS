import React, { useEffect, useState } from 'react'

interface Props {
    catagory: string
}

function ProductList({ catagory }: Props) {
    const [product, setProduct] = useState<string[]>([])

    useEffect(() => {
        console.log('Featching Product in: ' + catagory)
        setProduct(['Milk', 'Shirt'])
    }, [catagory])


    return (
        <div className=' my-2 '>
            Product Seleceted : {catagory}
        </div>
    )
}

export default ProductList


"use client"
import React, { useState } from 'react'
import Stripe from 'stripe'
import ProductCard from './ProductCard'

interface productsProps{
    products : Stripe.Product[]
  }

const ProductList = ({products}:productsProps) => {
    const [termSearched,setTermSearched] = useState<string>("")

    const filteredProduct=products.filter((product)=>{
        const typedTerm=termSearched.toLowerCase()
        const nameFiltered=product.name.toLowerCase().includes(typedTerm);
        const descriptionFiltered= product.description ? product.description.toLowerCase().includes(typedTerm):false

        return nameFiltered || descriptionFiltered
    })

  return (
    <div >
        <div className=" mb-6 flex justify-center">
            <input
            value={termSearched}
            onChange={(e)=>setTermSearched(e.target.value)}
            type='text'
            placeholder='Search for food '
            className=" w-full max-w-md rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500  "
            /> 
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                { filteredProduct.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product}/>
                       

                    </li>
                ))}
            </ul>
    </div>
  )
}

export default ProductList


// border border-red-500
import Link from 'next/link'
import React from 'react'
import Stripe from 'stripe'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

interface ProductCardProps{
    product:Stripe.Product
}

const ProductCard = ({product}:ProductCardProps) => {
    const productPrice= product.default_price as Stripe.Price
  return (
    <Link className="block h-full" href={`/products/${product.id}`}>
        <Card className="group hover:shadow-2xl transition duration-300 py-0 h-full flex flex-col border-gray-300 gap-0">
            {product.images && product.images[0] &&(
                <div className="relative h-60 w-full">
                    <Image
                    className="group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
                    alt={product.name}
                    src={product.images[0]}
                    objectFit='cover'
                    layout='fill'

                     />
                </div>
            )}
            <CardHeader className="p-4">
                <CardTitle className="text-xl font-bold text-gray-800">{product.name}</CardTitle>
                <CardDescription >{product.description && (<p className="text-gray-600 text-sm mb-2">{product.description}</p>)}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col justify-between">{productPrice && productPrice.unit_amount && (
                <p>{productPrice.currency}{(productPrice.unit_amount/100).toFixed(2)}</p>
                )}
                
                <Button className="mt-4 bg-black text-white">View Details</Button>
            </CardContent>
            
        </Card>
    </Link>
    
  )
}

export default ProductCard
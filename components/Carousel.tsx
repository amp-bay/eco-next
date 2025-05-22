"use client"
import Stripe from "stripe"
import { Card, CardContent, CardTitle } from "./ui/card"
import { useEffect, useState } from "react"
import Image from "next/image"

interface Props {
  products: Stripe.Product[];
  delay?: number; // optional delay in milliseconds
}

const Carousel = ({ products, delay = 0 }: Props) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const intervalTime = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % products.length)
      }, 2000)
      return () => clearInterval(intervalTime)
    }, delay)

    return () => clearTimeout(timeout)
  }, [products.length, delay])

  const currentProduct = products[currentImage]
  const productPrice = currentProduct.default_price as Stripe.Price

  return (
    <Card className="relative overflow-hidden rounded-lg shadow-md border-transparent">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-80 w-full">
          <Image
            className="transition-opacity duration-500 ease-in-out rounded"
            alt={currentProduct.name}
            layout="fill"
            objectFit="cover"
            src={currentProduct.images[0]}
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <CardTitle className="text-3xl font-bold text-black mb-2">{currentProduct.name}</CardTitle>
        {productPrice?.unit_amount && (
          <p className="text-2xl text-black">
            {productPrice.currency.toUpperCase()} {(productPrice.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default Carousel

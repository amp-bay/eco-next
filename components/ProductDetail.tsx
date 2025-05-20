import Stripe from "stripe"

interface productDetailProps{
    product:Stripe.Product;
}

const ProductDetail = ({product}:productDetailProps) => {
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail
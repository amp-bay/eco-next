import ProductDetail from "@/components/ProductDetail"
import { stripe } from "@/lib/stripe"



const productIdPage=async({params}:{params:{id:string}})=>{

    const product =await stripe.products.retrieve(params.id,{
        expand: ["default_price"]
    })

    return <ProductDetail product={product}/>
}

export default productIdPage
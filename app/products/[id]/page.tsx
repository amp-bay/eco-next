import ProductDetail from "@/components/ProductDetail"
import { stripe } from "@/lib/stripe"



const productIdPage=async({params}:{params:Promise<{id:string}>})=>{

    const {id}=await params
    const product =await stripe.products.retrieve(id,{
        expand: ["default_price"]
    })

    return <ProductDetail product={product}/>
}

export default productIdPage

import Carousel from "./Carousel"
import CommunityFeedback from "./CommunityFeedback"
import { stripe } from "@/lib/stripe"

const AboutUs = async() => {
    const products=await stripe.products.list(
        {
          expand:["data.default_price"],
          limit:4,
        })
        console.log(products)

 

  return (
    
    <section id="about" className="bg-white py-16 text-gray-800">
      <div className="container mx-auto px-4 md:px-10">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-grey">About Us</h2>
          <p className="mt-4 mx-auto text-gray-600 text-lg ">
            At <span className="text-blue-500 font-semibold">CHOP-LIFE</span>, we bring you the best of authentic Chinese cuisine — from spicy stir-fries and savory soups to classic noodle and rice dishes. Whether you're craving comfort food or a culinary adventure, we serve up bold flavors and fresh ingredients in every bite.
          </p>
        </div>



        <div className="flex justify-between gap-4 flex-wrap">
            <div className="w-full md:w-[30%]">
                <Carousel products={products.data} delay={10} />
            </div>
            <div className="w-full md:w-[30%]">
                <Carousel products={products.data} delay={2000} />
            </div>
            <div className="w-full md:w-[30%]">
                <Carousel products={products.data} delay={1100} />
            </div>
        </div>

        <CommunityFeedback/>

       </div>

        
    </section>
  )
}

export default AboutUs

"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className=" bg-white text-gray-800 py-10">
      <div className=" pt-8 pb-4 border bg-amber-400 container mx-auto px-6 sm:px-12 md:px-20 rounded-2xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
  
          <div>
            <h2 className="text-xl font-bold text-[#FF5A5F]">CHOP-LIFE</h2>
          </div>

    
          <div>
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600">Locations</h3>
            <ul className="space-y-1 text-sm">
              <li>Spintex</li>
              <li>Mushin</li>
              <li>Adenta</li>
              <li>East Legon</li>
              <li>Cantonment</li>
              <li>Enugu</li>
              <li className="text-[#FF5A5F] cursor-pointer hover:underline">See more</li>
            </ul>
          </div>

       
          <div>
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600">Download</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">Google Play Store</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">iOS App Store</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600">Get Help</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="mailto:support@choplife.com" className="hover:underline">Email</Link>
              </li>
            </ul>
          </div>

   
          <div>
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-600">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Terms of Use</Link>
              </li>
              <li className="text-xs text-gray-500 mt-2">© 2022, CHOP-LIFE.</li>
            </ul>
          </div>
        </div>

    
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <Link href="#" className="hover:text-[#FF5A5F] transition">Facebook</Link>
            <Link href="#" className="hover:text-[#FF5A5F] transition">Instagram</Link>
          </div>
          <p className="text-xs text-gray-400">Crafted with ❤️ by CHOP-LIFE Team</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const CommunityFeedback = () => {
    const [showAllPosts, setShowAllPosts] = useState(false)

    const posts = [
      {
        name: "marennPARK",
        time: "4 hours ago",
        action: "Reviewed",
        dish: "Szechuan Chicken",
        content: "The spice level was just perfect. Crispy and packed with flavor!",
      },
      {
        name: "Anonymous",
        time: "8 hours ago",
        action: "Tweaked",
        dish: "Sweet and Sour Pork",
        content:
          "Added some pineapple chunks and it elevated the taste. My family loved it!",
      },
      {
        name: "jboyd1231",
        time: "11 hours ago",
        action: "Asked",
        dish: "Egg Fried Rice",
        content: "Can I use jasmine rice instead of long grain?",
      },
      {
        name: "foodie_tina",
        time: "1 day ago",
        action: "Reviewed",
        dish: "Dumplings",
        content:
          "Soft, juicy, and full of umami. Definitely ordering again next weekend!",
      },
      {
        name: "ChefDan",
        time: "2 days ago",
        action: "Shared tip",
        dish: "Hot and Sour Soup",
        content: "Add bamboo shoots for extra crunch and authenticity.",
      },
      {
        name: "Grace_K",
        time: "2 days ago",
        action: "Reviewed",
        dish: "Kung Pao Chicken",
        content: "It had the perfect balance of heat and sweetness.",
      },
    ]
  
    const visiblePosts = showAllPosts ? posts : posts.slice(0, 3)
  return (
    <section className="bg-white py-16 text-gray-800">
        <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
            Fresh From Our Community
            </h3>
            {!showAllPosts && (
            <button
                className="text-amber-600 hover:underline text-sm"
                onClick={() => setShowAllPosts(true)}
            >
                View All
            </button>
            )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
            {visiblePosts.map((post, index) => (
            <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 shadow hover:shadow-md transition"
            >
                <div className="flex items-center space-x-3 mb-2">
                <Image
                    src="/profile.jpeg"
                    alt={post.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                />
                <div>
                    <p className="font-semibold text-sm">{post.name}</p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                </div>
                </div>
                <p className="text-sm mb-2">
                <span className="font-medium">{post.action}:</span>{" "}
                {post.dish}
                </p>
                <p className="text-gray-700 italic">“{post.content}”</p>
            </div>
            ))}
        </div>
  
    </section>
  )
}

export default CommunityFeedback





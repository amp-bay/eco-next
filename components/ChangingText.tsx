"use client"

import { useEffect, useState } from "react"

const ChangingText = () => {
    

    const welcomeTexts = [
        "Welcome to ",
        "欢迎来到 ",
        "ようこそ〜へ ",
        "Bienvenido a ",
        "مرحبًا بـ ",
        "Bienvenue à ",
        "Добро пожаловать в "
    ];

    const [textIndex,setTextIndex]=useState<number>(0)
      

    useEffect(()=>{
        const textInterval=setInterval(()=>{
            setTextIndex((prev)=>prev+1%welcomeTexts.length )
        },2000)

        return ()=>clearInterval(textInterval)
    },[])
  
  return (
    <div>
        <span className="text-3xl font-bold tracking-tight md:text-4xl">{welcomeTexts[textIndex]} </span>
    </div>
  )
}

export default ChangingText
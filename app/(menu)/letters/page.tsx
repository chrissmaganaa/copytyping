import Navbar from '@/components/made/Navbar'
import React from 'react'

export default function Letters() {
  return (
    <>
      <Navbar/>

      <div className="w-full flex flex-col justify-center items-center font-josefin mt-12">
        <div className="font-bold text-5xl">Choose Your Sales Letter</div>
        <div className="max-w-1/2 font-extralight text-xl text-center">Select a legendary sales letter to practice with. Each Letter contains insights and copywriting techniques from master persuaders.</div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='bg-emerald-800 w-4/5 flex justify-center mt-12'>yo</div>
      </div>
    </>
  )
}
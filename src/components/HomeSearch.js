"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsMicFill} from 'react-icons/bs'

const HomeSearch = () => {
    const [input,setInput] = useState("");
    const [randomSearchLoading,setRandomSearchLoading] = useState(false);
    const router = useRouter();
    const HandleSubmit = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?search=${input}`);
    }

    const randomSearch  =  async() => {
        setRandomSearchLoading(true);
        const response  = await fetch("https://random-word-api.herokuapp.com/word").then((res) => res.json()).then((data) => data[0]);

        if(!response) return;
        router.push(`/search/web?search=${response}`);
        setRandomSearchLoading(false);  
    }
  return (
    <>
        <form onSubmit={HandleSubmit} className='flex w-full mt-5 items-center mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full  hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            <AiOutlineSearch className=' text-3xl text-gray-500 mr-3 '/>
            <input type='text' placeholder='Search' onChange={(e) => setInput(e.target.value)} value={input} className=' flex-grow  focus:outline-none' />
            <BsMicFill className=' text-xl '/>
        </form> 
        <div className='flex flex-wrap gap-3 mt-4'>
            <button className=' btn'>Google Search</button>
            <button className=' btn flex justify-center items-center disabled:opacity-80' disabled={randomSearchLoading} onClick={randomSearch}>
                {
                    randomSearchLoading? (
                        <img src='/spinner.svg' alt='loading...' className=' h-6 text-center'/>
                    ) :(
                        "I'm Feeling Sad"
                    )
                }
                
            </button>
        </div>
    </>
  )
}

export default HomeSearch

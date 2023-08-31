import WebSearchResult from '@/components/WebSearchResult';
import Link from 'next/link';
import React from 'react'
const WebSearchPage = async({searchParams}) => {
  const startIndex  = searchParams.start || "1";
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams?.search}&start=${startIndex}`)
  
  if(!response.ok){
    throw new Error("Something went wrong");
  }

  const data = await response.json()
  const results = data.items;

  if(!results) {
    return (
      <div className=" flex justify-center items-center flex-col pt-10  " >
        <h1 className=' text-3xl  mb-4 '>No Results Found</h1>
        <p className=' text-lg '>
          Try searching for something else or go back to the homepage.
          <Link href={"/"} className=' text-blue-500 ml-2'>
          Go Back
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
        {
          results &&  <WebSearchResult results={data} />
        }
    </> 
  )
}

export default WebSearchPage

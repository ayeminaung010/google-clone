import React from 'react'
// https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
const WebSearchPage = async({searchParams}) => {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams?.search}`)
  const data = await response.json()
  const results = data.items;


  return (
    <>
        {
          results &&  results.map((result) => (
            <h1 key={result}>{result?.title}</h1>
          ))
        }
    </> 
  )
}

export default WebSearchPage

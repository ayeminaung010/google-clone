import Link from 'next/link'
import Parser from 'html-react-parser'
import React from 'react'
import PaginationButton from './PaginationButton'

const WebSearchResult = ({results}) => {
  return (
    <div className=' w-full mx-auto px-3 pb-40 sm:pb-24  sm:pl-[5%] md:pl-[24%] lg:pl-52'>
        <p className=' mb-5 mt-3'>
            About {results.searchInformation?.formattedTotalResults} results  ({results.searchInformation?.formattedSearchTime}ms)
        </p>
        {
            results?.items.map((result) => (
                <div className=' mb-8 max-w-xl  ' key={result?.link}>
                    <div className="group flex flex-col ">
                        <Link href={result?.link} className=' text-sm truncate ' target='_blank'>
                        {result?.formattedUrl}
                        </Link>
                        <Link className=' group-hover:underline' href={result.link}>
                            {result?.title}
                        </Link>
                    </div>
                    <p className=' text-xl  truncate font-medium text-blue-800 '>{Parser(result?.htmlSnippet)}</p>
                </div>
            ))
        }
        <div className="mb-10">
            <PaginationButton/>
        </div>
    </div>
  )
}

export default WebSearchResult

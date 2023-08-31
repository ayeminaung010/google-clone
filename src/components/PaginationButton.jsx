"use client"
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import {GrPrevious,GrNext} from 'react-icons/gr'

const PaginationButton = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("search");
    const startIndex = searchParams.get("start") || 1;

  return (
    <div className=' text-blue-700 flex px-10 pb-4  justify-between sm:justify-start sm:space-x-44  sm:px-0'>
        {
            startIndex >= 10 && (
                <Link href={`${pathName}?search=${searchTerm}&start=${startIndex -10 }`}>
                    <div className=" flex flex-col cursor-pointer hover:underline items-center ">
                        <GrPrevious className=' h-5 '/>
                        <p>Previous</p>
                    </div>
                </Link>
            )
            
        }

        {
            startIndex <= 90 && (
                <Link href={`${pathName}?search=${searchTerm}&start=${startIndex +  10 }`}>
                    <div className=" flex flex-col cursor-pointer hover:underline items-center ">
                        <GrNext className=' h-5 '/>
                        <p>Next</p>
                    </div>
                </Link>
            )
            
        }
    </div>
  )
}

export default PaginationButton

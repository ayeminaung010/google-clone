import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'


const Home = () => {
  return (
    <div>
      <HomeHeader/>

      <div className='flex flex-col mt-24 items-center'>
        <Image src={"/googlelogo_color.png"} alt={"Google"} width={"300"} height={"100"} />
        <HomeSearch/>
      </div>
    </div>
  )
}

export default Home


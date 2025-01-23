import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { journey } from '@/data'

const Journey = () => {
  return (
    <div className="pt-10 pb-10" id='journey'>
    <h1 className='heading'>
    My <span className="text-purple">Learning</span> and Growth <span className="text-purple">Journey</span>{' '}
    
    </h1>
    <div className='flex flex-col items-center lg:mt-16 max-lg:mt-14'>
       
    <InfiniteMovingCards
        items={journey}
        direction="right"
        speed="slow"
      />
    
    </div>


    
    </div>
  )
}

export default Journey
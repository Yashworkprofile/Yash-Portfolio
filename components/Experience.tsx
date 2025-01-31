import React from 'react'
import  {workExperience} from '../data/index'
import { Button } from './ui/moving-border'
const Experience = () => {
  return (
    <div className=" mt-7 pt-10 pb-10 " id='Experience'>
    <h1 className='heading'>
    My <span className="text-purple">Work Experience</span>{' '}
    </h1>
    {/* grid lg:grid-cols-4 grid-cols-1 */}
    <div className='w-full mt-12 flex justify-center '>
        {workExperience.map(( {id, title,  desc,  thumbnail})=>(
           <Button key={id} 
           duration={Math.floor(Math.random()*10000)+7000}
           borderRadius='1.75rem'
           className='flex-1 text-white border-neutral-200 dark:border-slate-800'
           
           >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img
                src={thumbnail}
                alt={thumbnail}
                className='lg:w-32 md:w-20 w-16'
                />
                <div className='lg:ms-5'>
                    <h1 className='text-start text-xl md:text-2xl font-bold'>{title}

                    </h1>
                    <p className='text-start text-white-100 mt-3 font-semibold'>{desc}</p>
                </div>
            </div>
           </Button>
        ))}
        </div>
    
    
    </div>
  )
}

export default Experience
import React from 'react'

// import social data
import { social } from '../data'

const Socials = () => {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index)=> {
        return <li className='flex justify-center items-center text-accent hover:bg-slate-300' key={index}>
          <a title={item.title} className='text-xl' href={item.href}>
            {item.icon}
          </a>
        </li>
      })}
    </ul>
  )
}

export default Socials
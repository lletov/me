import React from 'react'

export const Contacts = () => {
  return (
    <div className='content'>
      <h2>Contacts <span className='tag'></span></h2>
      <div className='contacts'>
        <button className='btn'>
          <span className='btn-arrow'></span>
          telegram
        </button>
        <button className='btn'>
          <span className='btn-arrow'></span>
          GitHub
        </button>
        <button className='btn'>
          <span className='btn-arrow'></span>
          Linkedin
        </button>
      </div>
      
    </div>
  )
}

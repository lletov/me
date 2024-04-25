import React from 'react'

export const Geo = ({hour}) => {
  let localTime = hour +3
  if (localTime > 22 && localTime < 8){
    return (
      <div className='content' title='offline, see u tomorrow 5:00 - 19:00 UTC'>
        <div className='geo'>
          <div className='online-marker' style={{backgroundColor: '#ff4f4f'}}></div>
          <h4>Moscow, GMT +3</h4>
        </div>
      </div>
    )
  } else {
    return (
      <div className='content' title='online'>
        <div className='geo'>
          <div className='online-marker' style={{backgroundColor: '#12FF63'}}></div>
          <h4>Moscow, GMT +3</h4>
        </div>
      </div>
    )
  }
}
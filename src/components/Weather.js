import React from 'react'

export const Weather = ({temp, weatherCode}) => {
	if (temp < 0){
		return (
			<div className='content'>
				<p>{temp}°C</p>
				<p>{weatherCode}</p>
			</div>
		  )
	} else {
		return (
			<div className='content'>
				<p>+{temp}°C</p>
				<p>{weatherCode}</p>
			</div>
		  )
	}
}

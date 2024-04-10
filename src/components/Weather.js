import React from 'react'

export const Weather = ({temp, weatherCode}) => {
	if (temp < 0){
		return (
			<div className='content'>
				<h3>{temp}°C</h3>
				<h3>{weatherCode}</h3>
			</div>
		  )
	} else {
		return (
			<div className='content'>
				<h3>+{temp}°C</h3>
				<h3>{weatherCode}</h3>
			</div>
		  )
	}
}

import React from 'react'

export const Weather = ({temp, weatherCode}) => {
	if (temp == null){
		return (
			<div className='content'>
				<h4>--</h4>
				{/* <h3>{weatherCode}</h3> */}
			</div>
		  )
	} else if (temp < 0) {
		return (
			<div className='content'>
				<h4>{temp}°C</h4>
				{/* <h3>{weatherCode}</h3> */}
			</div>
		  )
	} else {
		return (
			<div className='content'>
				<h4>+{temp}°C</h4>
				{/* <h3>{weatherCode}</h3> */}
			</div>
		  )
	}
}

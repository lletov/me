import React from 'react'

export const Weather = ({temp}) => {
	if (temp < 0){
		return (
			<div>{temp} °C</div>
		  )
	} else {
		return (
			<div>+{temp} °C</div>
		  )
	}
}

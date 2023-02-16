import React, { useState } from 'react'

const CountUp = () => { 
  const [isRed, setisRed] = useState(false) 
  return ( 
	<> 
	  <p>押すと赤に変わります</p>
	   <button className={isRed? "bg-red-500": "bg-blue-500"} onClick={() => setisRed(!isRed)}> 
	     Click me 
	   </button> 
       
	</>
  ) 
}

export default CountUp
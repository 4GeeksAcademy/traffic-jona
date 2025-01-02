import React, { useState } from 'react'  
import '../component/index.css'


const Traffic = () => { 
  const [selectedcolor,setSelectedColor]=useState("red"); 

  
  
  
  
  return (
    <div className="Cuerpo">
    <div className="traffic-light">
			<div onClick={()=>setSelectedColor("red")} className={"Light red "+(selectedcolor === "red" ? " glow":"")}></div>
			<div onClick={()=>setSelectedColor("yellow")} className={"Light yellow"+(selectedcolor === "yellow" ? " glow":"")}></div>
			<div onClick={()=>setSelectedColor("green")} className={"Light green"+(selectedcolor === "green" ? " glow":"")}></div>

		</div> 
    
    </div>
  )
}

export default Traffic
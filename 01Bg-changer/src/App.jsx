import { useState } from "react"


function App() {
  const [color,setColor]=useState('');

  const handleColorChange=(color)=>{
    setColor(color);
  }

  return (
    <div className={`bg-slate-600  text-7xl w-full h-screen flex justify-center items-center ${color}`}> 
    <div className="bg-white w-80 h-1/2 rounded-lg " >
    
    <div className="w-full h-full flex flex-wrap justify-center gap-4 p-4 ">
      
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-red-400 rounded-lg border-2"  onClick={() => handleColorChange('bg-red-400')}>1</button>
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-blue-400 rounded-lg border-2" onClick={()=>handleColorChange('bg-blue-400')}>2</button>
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-yellow-400 rounded-lg border-2" onClick={()=>handleColorChange('bg-yellow-400')}>3</button>
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-green-400 rounded-lg border-2" onClick={()=>handleColorChange('bg-green-400')}>4</button>
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-pink-400 rounded-lg border-2" onClick={()=>handleColorChange('bg-pink-400')}>5</button>
    <button className="w-20 h-20 md:w-24 md:h-24 shadow-xl lg:w-28 lg:h-28 bg-lime-400 rounded-lg border-2" onClick={()=>handleColorChange('bg-lime-400')}>6</button>
    </div>
    
    </div>
    </div>
   
  )
}

export default App

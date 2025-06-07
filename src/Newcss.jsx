import React, { useState } from 'react'

const Newcss = () => {
    const [color, setcolor] = useState("red");
  return (
    <div style={{color:color}}>jalkjlsj;o
    <button onClick={()=>setcolor("yellow")}>change color</button>
    </div>
  )
}

export default Newcss
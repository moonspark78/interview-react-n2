import React, { useState } from 'react'
import "./Call.css"

export const Callback = () => {
    const [search, setSearch] = useState("");


    const changeInput = () => {};
    
  return (
    <div>
        <input 
            type="text" 
            placeholder="Enter your name" 
            name="text"  
            class="input-field" 
        />
    </div>
  )
}

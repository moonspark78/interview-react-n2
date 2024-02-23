import React, { useState } from 'react'
import "./Call.css"

export const Callback = ({colo}) => {
    const [search, setSearch] = useState("");


    const changeInput = (e) => {
        const color = e.target.value;
        setSearch(color);
        colo(color);

    };

  return (
    <div>
        <input 
            type="text" 
            placeholder="Enter your name" 
            name="text"  
            class="input-field" 
            onChange={changeInput}
            value={search}
        />
    </div>
  )
}

import React from 'react'

export const Sixth = () => {

    const arr = [1, 2, 3, 4, 5]
    const double = () =>{
        return arr.map(x => x*2)
    }
    console.log(double());

  return (
    <div>Sixth</div>
  )
}

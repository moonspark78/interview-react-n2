import React from 'react'

/* 
Consigne : affiche la ligne en dessous en respectant le style imposé et sans les balise html
<h1 style="volor:blue;">Some really useful content</h1>
 */

const data = "<h1 style='color:blue;'>Some really useful content</h1>"

export const Fourthh = () => {


  return (
    <div dangerouslySetInnerHTML={{ __html: data}}>

    </div>
  )
}

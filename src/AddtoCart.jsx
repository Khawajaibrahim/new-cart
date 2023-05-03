import React from 'react'
import "./Products.css"

function AddtoCart({cart}) {
  return (
    <div className='heading'>Cart Total Items  
        <span>  {cart.length}</span>
    </div>
  )
}

export default AddtoCart
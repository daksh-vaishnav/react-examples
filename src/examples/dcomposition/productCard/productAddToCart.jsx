import React from 'react'

export default function ProductAddToCart({onClickHandler,children}) {
  return (
    <button className="product-add-to-cart" onClick={onClickHandler}>{children}</button>
  )
}

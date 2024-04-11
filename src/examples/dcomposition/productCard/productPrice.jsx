import React from 'react'

export default function ProductPrice({price}) {
  return (
    <h2 className="product-price">{ "$ " + price}</h2>
  )
}

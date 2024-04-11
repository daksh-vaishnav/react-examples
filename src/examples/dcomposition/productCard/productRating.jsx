import React from 'react'
import { useProductCardContext } from './productContext';

export default function ProductRating({rating}) {
    const product = useProductCardContext()
  return (
    <h2 className="product-rating">{product.rating}</h2>
  )
}

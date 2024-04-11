import React from "react";
import "./product.css";
import ProductImage from "./productImage";
import ProductRating from "./productRating";
import ProductDescription from "./productDescription";
import ProductPrice from "./productPrice";
import ProductInfo from "./productInfo";
import ProductAddToCart from "./productAddToCart";


export default function ProductCard({product, children}) {
	return (
		<div className="product-container">
			<div className="product-card">
				{children}
			</div>
		</div>
	);
}


ProductCard.img = ProductImage
ProductCard.info = ProductInfo
ProductCard.desc = ProductDescription
ProductCard.rating = ProductRating
ProductCard.price = ProductPrice
ProductCard.action = ProductAddToCart
import React from "react";
import "./product.css";
import ProductImage from "./productImage";
import ProductRating from "./productRating";
import ProductDescription from "./productDescription";
import ProductPrice from "./productPrice";
import ProductInfo from "./productInfo";
import ProductAddToCart from "./productAddToCart";
import { ProductCardContextProvider } from "./productContext";

export default function ProductCard({ product, children }) {
	return (
		<ProductCardContextProvider value={product}>
			<div className="product-container">
				<div className="product-card">{children}</div>
			</div>
		</ProductCardContextProvider>
	);
}

ProductCard.img = ProductImage;
ProductCard.info = ProductInfo;
ProductCard.desc = ProductDescription;
ProductCard.rating = ProductRating;
ProductCard.price = ProductPrice;
ProductCard.action = ProductAddToCart;

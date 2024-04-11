import React from "react";
import "./product.css";


export default function ProductCard({children}) {
	return (
		<div className="product-container">
			<div className="product-card">
				{children}
			</div>
		</div>
	);
}

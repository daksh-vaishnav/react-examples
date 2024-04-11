import React from "react";
import { useProductCardContext } from "./productContext";


export default function ProductDescription({ description }) {
	const product = useProductCardContext();
	return <h2 className="product-description">{product.description}</h2>;
}

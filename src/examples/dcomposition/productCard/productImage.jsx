import React from "react";
import { useProductCardContext } from "./productContext";

export default function ProductImage({ image }) {
	const product = useProductCardContext();
	return <img className="product-img" src={product.image} />;
}

import React from "react";
import { useProductCardContext } from "./productContext";

export default function ProductPrice({ price }) {
	const product = useProductCardContext();
	return <h2 className="product-price">{"$ " + product.price}</h2>;
}

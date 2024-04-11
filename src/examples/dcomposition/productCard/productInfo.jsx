import React from "react";
import { useProductCardContext } from "./productContext";

export default function ProductInfo({ info }) {
	const product = useProductCardContext();
	return <h1 className="product-info">{product.info}</h1>;
}

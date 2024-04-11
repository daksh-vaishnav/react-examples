import { createContext, useContext } from "react";

const ProductCardContext = createContext(null);

function useProductCardContext() {
	const context = useContext(ProductCardContext);
	if (!context) {
		throw new Error(
			"ProductCard.* component must be rendered as child of ProductCard component"
		);
	}
	return context;
}

function ProductCardContextProvider({ value, children }) {
	return (
		<ProductCardContext.Provider value={value}>
			{children}
		</ProductCardContext.Provider>
	);
}

// export default ProductCardContext;

export { useProductCardContext, ProductCardContextProvider };

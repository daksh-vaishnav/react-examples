import ProductCard from "./productCard/productCard";
import ProductDescription from "./productCard/productDescription";
import ProductImage from "./productCard/productImage";
import ProductInfo from "./productCard/productInfo";
import ProductPrice from "./productCard/productPrice";
import ProductRating from "./productCard/productRating";

const product = {
	image: "https://picsum.photos/id/250/200/300",
	rating: "4.5  ⭐⭐⭐⭐",
	info: "DSLR Camera",
	description: "18-55 mm Lens Kit (491362608)",
	price: 50000,
};

export default function CompositionDemo() {
	return (
		<>
			<ProductCard>
				<ProductImage image={product.image} />
				<ProductInfo info={product.info} />
				<ProductDescription description={product.description} />
				<ProductRating rating={product.rating} />
				<ProductPrice price={product.price} />
				<button className="product-add-to-cart">Add to cart</button>
			</ProductCard>
		</>
	);
}

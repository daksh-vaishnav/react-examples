import ProductCard from "./productCard/productCard";

const product = {
	image: "https://picsum.photos/id/250/200/300",
	rating: "4.5  ⭐⭐⭐⭐",
	info: "DSLR Camera",
	description: "18-55 mm Lens Kit (491362608)",
	price: 50000,
};

const onClickHandler = () => {
    console.log("hello world");
}

export default function CompositionDemo() {
	return (
		<ProductCard product={product}>
			<ProductCard.img />
			<ProductCard.info />
			<ProductCard.desc />
			<ProductCard.rating />
			<ProductCard.price />
			<ProductCard.action
				onClickHandler={onClickHandler} >
				Add To Cart
			</ProductCard.action>
		</ProductCard>
	);
}

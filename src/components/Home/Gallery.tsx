import Item from "./Item";

type Props = {
	images: Image[];
};

const Gallery: React.FC<Props> = ({ images }) => {
	let content;

	content = images.map((image) => {
		return <Item image={image} />;
	});
	return images.length > 0 ? (
		<section>
			<ul className="flex flex-wrap w-[90dvw] mx-auto gap-8">
				{content}
			</ul>
		</section>
	) : (
		<p>Skeleton loader</p>
	);
};

export default Gallery;

type Props = {
	image: Image;
};

const Item: React.FC<Props> = ({ image }) => {
	return (
		<li className="flex flex-col gap-4 p-5 w-[250px]">
			<div className="w-[200px] h-[200px]">
				<img
					className="w-full h-full rounded-md object-center object-cover"
					src={image.urls.small}
					alt={image.alt_description}
				/>
			</div>
			<h3 className="text-lg text-main tracking-wider">
				{image.slug
					.substring(0, image.slug.lastIndexOf("-"))
					.split("-")
					.join(" ")
					.slice(0, 100) || image.slug}
			</h3>
		</li>
	);
};

export default Item;

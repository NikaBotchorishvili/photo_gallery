type Props = {
	image: Image;
	handlePopupOpen: (image: Image) => void;
};

const Item: React.FC<Props> = ({ image, handlePopupOpen }) => {
	const handleOpen = () => {
		handlePopupOpen(image);
	};

	return (
		<li className="flex shadow-xl rounded-md flex-col gap-4 py-6 w-[300px]">
			<div className=" h-[250px]">
				<img
					className="w-full cursor-pointer h-full rounded-t-md object-center object-cover"
					src={image.urls.small}
					alt={image.alt_description}
					onClick={handleOpen}
				/>
			</div>
			<h3 className="px-5 text-lg text-main tracking-wider">
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

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	image: Image;
	handlePopupClose: () => void;
};

const Popup: React.FC<Props> = ({ image, handlePopupClose }) => {
	console.log(image);
	return (
		<>
			<div className="h-dvh w-dvw fixed top-0 left-0 bg-black bg-opacity-30 pointer-events-none"></div>
			<article className="overflow-visible fixed top-[100px] sm:top-auto left-1/2 -translate-x-1/2 w-dvw sm:w-[90dvw] md:w-[70dvw] bg-white shadow-x ">
				<FontAwesomeIcon
					className="absolute cursor-pointer left-3 sm:-left-8 md:-left-10 -top-10 text-white"
					title="Close"
					size="2x"
					icon={faX}
					onClick={handlePopupClose}
				/>
				<div className=" ">
					<img
						className="mx-auto h-[70dvh] w-[70%] aspect-video object-contain object-center"
						src={image.urls.full}
						alt={image.alt_description}
					/>
				</div>

				<div>
					<small>Likes: {image.likes}</small>
				</div>
			</article>
		</>
	);
};

export default Popup;

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	fullImageURL: string;
	smallImageURL: string;
	imageAltDescription: string;
	description: string;
	likes: number;
	views: number;
	handlePopupClose: () => void;
};
const PopupElement: React.FC<Props> = ({
	fullImageURL,
	smallImageURL,
	imageAltDescription,
	likes,
	views,
	handlePopupClose,
	description,
}) => {
	return (
		<article className="overflow-visible p-5 rounded-md fixed top-[100px] left-1/2 -translate-x-1/2 w-dvw sm:w-[90dvw] md:w-[70dvw] bg-white shadow-md ">
			<FontAwesomeIcon
				className="absolute cursor-pointer left-3 sm:-left-8 md:-left-10 -top-10 text-white"
				title="Close"
				size="2x"
				icon={faX}
				onClick={handlePopupClose}
			/>
			<div className="flex flex-col gap-y-2">
				<div
					className="bg-cover bg-center h-[70dvh] mx-auto w-[70%]"
					style={{ background: smallImageURL }}
				>
					<img
						className=" w-full h-full rounded-md aspect-video object-contain object-center"
						src={fullImageURL}
						alt={imageAltDescription}
						loading="lazy"
					/>
				</div>
				<div className="flex gap-x-10 text-main">
					<h3 className="flex flex-col gap-y-1">
						<div className="text-2xl">Likes:</div>
						<div>{likes}</div>
					</h3>
					<h3 className="flex flex-col gap-y-1">
						<div className="text-2xl">Views:</div>
						<div>{views}</div>
					</h3>
				</div>
				<p>{description}</p>
			</div>
		</article>
	);
};

export default PopupElement;

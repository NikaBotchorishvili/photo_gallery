import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	handlePopupClose: () => void;
};

const PopupError: React.FC<Props> = ({ handlePopupClose }) => {
	return (
		<article className="overflow-visible p-5 rounded-md fixed top-[100px] left-1/2 -translate-x-1/2 w-dvw h-[60dvh] sm:w-[90dvw] md:w-[70dvw] bg-white shadow-md justify-center items-center flex flex-col gap-5 ">
			<FontAwesomeIcon
				className="absolute cursor-pointer left-3 sm:-left-8 md:-left-10 -top-10 text-white"
				title="Close"
				size="2x"
				icon={faX}
				onClick={handlePopupClose}
			/>
			<h1 className="text-4xl text-main">Oops!</h1>
			<small className="text-xl text-red max-w-sm text-center tracking-wider ">
				Unexpected error occurred while fetching the data
			</small>
		</article>
	);
};

export default PopupError;

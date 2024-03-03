type Props = {
	image: Image;
	handlePopupClose: () => void;
};
import { useGetImageStatisticsQuery } from "../../../features/Images/Images";
import PopupElement from "./components/PopupElement";
import PopupError from "./components/PopupError";
import PopupSkeleton from "./components/PopupSkeleton";

const Popup: React.FC<Props> = ({ image, handlePopupClose }) => {
	const { data, isLoading, isError, isSuccess } = useGetImageStatisticsQuery({
		imageId: image.id,
	});

	let content;
	if (isLoading) {
		content = <PopupSkeleton />;
	} else if (isSuccess && data) {
		content = (
			<PopupElement
				handlePopupClose={handlePopupClose}
				imageAltDescription={image.description}
				fullImageURL={image.urls.full}
				smallImageURL={image.urls.thumb}
				likes={data.likes.total}
				views={data.views.total}
				description={image.description}
			/>
		);
	} else if (isError) {
		content = <PopupError handlePopupClose={handlePopupClose} />;
	}
	return (
		<>
			<div className="h-dvh w-dvw fixed top-0 left-0 bg-black bg-opacity-30 pointer-events-none"></div>
			{content}
		</>
	);
};

export default Popup;

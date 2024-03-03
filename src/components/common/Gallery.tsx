import { useState } from "react";
import {
	useGetImagesQuery,
	useSearchImagesQuery,
} from "../../features/Images/Images";

import Item from "./Item/Item";
import ItemSkeleton from "./Item/ItemSkeleton";
import useInfiniteScroll from "../../libs/InfiniteScroll";
import Popup from "./Popup";

type Props = {
	SearchTerm: string;
};

const Gallery: React.FC<Props> = ({ SearchTerm }) => {
	const [page, setPage] = useState<number>(0);
	const [selectedImage, setSelectedItem] = useState<Image | null>(null);
	const handlePopupOpen = (image: Image) => {
		setSelectedItem(image);
	};
	const handlePopupClose = () => {
		setSelectedItem(null);
	};

	const {
		data: images,
		isLoading,
		isSuccess,
		isFetching,
		isError,
	} = SearchTerm === ""
		? useGetImagesQuery({ page: page })
		: useSearchImagesQuery({
				page: page,
				searchTerm: SearchTerm as string,
		  });
	useInfiniteScroll({
		SearchTerm: SearchTerm,
		isFetching: isFetching,
		selectedImage: selectedImage,
		page: page,
		setPage,
	});
	let content;

	if (isLoading) {
		content = new Array(10)
			.fill(0)
			.map((_, idx) => <ItemSkeleton key={idx} />);
	} else if (isSuccess) {
		if (SearchTerm === "") {
			content = (images as Image[]).map((image, idx) => {
				return (
					<Item
						handlePopupOpen={handlePopupOpen}
						key={idx}
						image={image}
					/>
				);
			});
		} else {
			content = (images as SearchResult).results.map((image, idx) => {
				return (
					<Item
						handlePopupOpen={handlePopupOpen}
						key={idx}
						image={image}
					/>
				);
			});
		}
	} else if (isError) {
		content = <h3 className="text-2xl text-red-700">Unexpected Error occurred!</h3>;
	}

	return (
		<>
			{selectedImage !== null && (
				<Popup
					handlePopupClose={handlePopupClose}
					image={selectedImage}
				/>
			)}
			<article>
				<ul className="flex  justify-center flex-wrap w-[90dvw] mx-auto gap-8">
					{content}
					{isFetching &&
						new Array(10)
							.fill(0)
							.map((_, idx) => <ItemSkeleton key={idx} />)}
				</ul>
			</article>
		</>
	);
};

export default Gallery;

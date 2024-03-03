import { useState, useEffect } from "react";
import {
	useGetImagesQuery,
	useSearchImagesQuery,
} from "../../features/Images/Images";
import Item from "./Item/Item";
import ItemSkeleton from "./Item/ItemSkeleton";
import Popup from "./Popup";

type Props = {
	SearchTerm: string;
};

const Gallery: React.FC<Props> = ({ SearchTerm }) => {
	const [page, setPage] = useState<number>(1);
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
	} = SearchTerm === ""
		? useGetImagesQuery({ page: page })
		: useSearchImagesQuery({
				page: page,
				searchTerm: SearchTerm as string,
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
	}

	useEffect(() => {
		const onScroll = () => {
			const scrolledToBottom =
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight;
			if (scrolledToBottom && !isFetching) {
				setPage(page + 1);
			}
		};

		document.addEventListener("scroll", onScroll);
		if (selectedImage) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
		return () => {
			document.removeEventListener("scroll", onScroll);
			document.body.classList.remove("overflow-hidden");
		};
	}, [page, isFetching, SearchTerm, selectedImage]);

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

import { useState, useEffect } from "react";
import {
	useGetImagesQuery,
	useSearchImagesQuery,
} from "../../features/Images/Images";
import Item from "./Item";

type Props = {
	SearchTerm: string;
};

const Gallery: React.FC<Props> = ({ SearchTerm }) => {
	const [page, setPage] = useState<number>(1);
	const {
		data: images,
		isLoading,
		isSuccess,
		isError,
		isFetching,
	} = SearchTerm === ""
		? useGetImagesQuery({ page: page })
		: useSearchImagesQuery({
				page: page,
				searchTerm: SearchTerm as string,
		  });

	let content;

	if (isLoading) {
		content = <p>Skeleton loader</p>;
	} else if (isSuccess) {
		if (SearchTerm === "") {
			content = (images as Image[]).map((image, idx) => {
				return <Item key={idx} image={image} />;
			});
		} else {
			content = (images as SearchResult).results.map((image, idx) => {
				return <Item key={idx} image={image} />;
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

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, [page, isFetching, SearchTerm]);
	return (
		<article>
			<ul className="flex justify-center flex-wrap w-[90dvw] mx-auto gap-8">
				{content}
			</ul>
		</article>
	);
};

export default Gallery;

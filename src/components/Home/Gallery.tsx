import { useState, useEffect } from "react";
import { useGetImagesQuery } from "../../features/Images/Images";
import Item from "./Item";

const Gallery = () => {
	const [page, setPage] = useState<number>(1);
	const { data, isLoading, isError, isSuccess, isFetching } =
		useGetImagesQuery(page);
	const images = data ?? [];

	let content;

	if (isLoading) {
		content = <p>Skeleton loader</p>;
	} else if (isSuccess) {
		content = data.map((image) => {
			return <Item key={image.id} image={image} />;
		});
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
	}, [page, isFetching]);
	return (
		<section>
			<ul className="flex justify-center flex-wrap w-[90dvw] mx-auto gap-8">
				{content}
			</ul>
		</section>
	);
};

export default Gallery;

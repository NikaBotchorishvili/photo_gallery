import { useEffect } from "react";

type Props = {
    isFetching: boolean;
    SearchTerm: string;
    selectedImage: Image | null;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>

}

const useInfiniteScroll  = ({ SearchTerm, isFetching, selectedImage, page, setPage }: Props) => {
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
    return { page };
}
 
export default useInfiniteScroll;
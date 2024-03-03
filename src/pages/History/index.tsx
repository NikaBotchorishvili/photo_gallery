import { setSearchTerm } from "../../app/api/searchSlice";
import { useAppDispatch } from "../../app/hooks";
import HistoryList from "../../components/History/HistoryList";
import { useState } from "react";
import Gallery from "../../components/common/Gallery";

const History = () => {
	const [term, setTerm] = useState<string>("");

	const dispatch = useAppDispatch();

	const SearchTermOnClickHandler = (searchTerm: string) => {
		dispatch(setSearchTerm(searchTerm));
		setTerm(searchTerm);
	};
	return (
		<section className="flex flex-col items-center gap-y-5">
			<h1 className="text-4xl">Recently Searched</h1>
			<HistoryList SearchTermOnClickHandler={SearchTermOnClickHandler} />
			{term !== "" && <Gallery SearchTerm={term} />}
		</section>
	);
};

export default History;

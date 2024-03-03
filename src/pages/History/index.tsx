import { useNavigate } from "react-router-dom";
import { SelectSearchTerms, setSearchTerm } from "../../app/api/searchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const History = () => {
	const SearchTerms = useAppSelector(SelectSearchTerms) as string[];
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const SearchTermOnClickHandler = (searchTerm: string) => {
		dispatch(setSearchTerm(searchTerm));

        navigate("/")
	};
	return (
		<section className="flex flex-col items-center gap-y-5">
			<h1 className="text-4xl">Recently Searched</h1>
			{SearchTerms.length > 0 && (
				<ul className="flex gap-x-10 justify-center flex-wrap md:w-[70%] border border-black py-4 rounded-md">
					{SearchTerms.map((searchTerm) => {
						return (
							<li
								onClick={() => SearchTermOnClickHandler(searchTerm)}
								className="text-2xl underline tracking-widest"
							>
								{searchTerm}
							</li>
						);
					})}
				</ul>
			)}
		</section>
	);
};

export default History;

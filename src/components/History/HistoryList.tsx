import { SelectSearchTerms } from "../../app/api/searchSlice";
import { useAppSelector } from "../../app/hooks";

type Props = {
	SearchTermOnClickHandler: (searchTerm: string) => void;
};

const HistoryList: React.FC<Props> = ({ SearchTermOnClickHandler }) => {
	const SearchTerms = useAppSelector(SelectSearchTerms) as string[];
	// return SearchTerms.length > 0 ? (
	// 	<ul className="flex gap-x-10 items-center md:justify-center  flex-col md:flex-row md:flex-wrap w-[90dvw] border border-black py-4 rounded-md">
	// 		{SearchTerms.map((searchTerm) => {
	// 			return (
	// 				<li
	// 					key={searchTerm}
	// 					onClick={() => SearchTermOnClickHandler(searchTerm)}
	// 					className="text-2xl underline cursor-pointer tracking-widest"
	// 				>
	// 					{searchTerm}
	// 				</li>
	// 			);
	// 		})}
	// 	</ul>
	// ) : (
	// 	<h3 className="tracking-wider underline text-main">
	// 		Nothing to show here!
	// 	</h3>
	// );
	return SearchTerms.length > 0 ? (
		<select
			className="border border-main text-main text-xl  rounded-md py-3 px-5"
			onChange={(e) => SearchTermOnClickHandler(e.target.value)}
		>
			<option value="" disabled selected>
				Select an option
			</option>
			{SearchTerms.map((term, idx) => (
				<option key={idx} value={term}>
					{term}
				</option>
			))}
		</select>
	) : (
		<h3 className="tracking-wider underline text-main">
			Nothing to show here!{" "}
		</h3>
	);
};

export default HistoryList;

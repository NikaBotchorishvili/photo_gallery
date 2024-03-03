import { SelectSearchTerms } from "../../app/api/searchSlice";
import { useAppSelector } from "../../app/hooks";

type Props = {
	SearchTermOnClickHandler: (searchTerm: string) => void;
};

const HistoryList: React.FC<Props> = ({ SearchTermOnClickHandler }) => {
	const SearchTerms = useAppSelector(SelectSearchTerms) as string[];
	return SearchTerms.length > 0 ? (
		<ul className="flex gap-x-10 justify-center flex-wrap md:w-[70%] border border-black py-4 rounded-md">
			{SearchTerms.map((searchTerm) => {
				return (
					<li
						key={searchTerm}
						onClick={() => SearchTermOnClickHandler(searchTerm)}
						className="text-2xl underline cursor-pointer tracking-widest"
					>
						{searchTerm}
					</li>
				);
			})}
		</ul>
	) : (
		<h3 className="tracking-wider underline text-main">
			Nothing to show here!
		</h3>
	);
};

export default HistoryList;

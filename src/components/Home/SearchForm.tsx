import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
	register: UseFormRegisterReturn;
	onSubmit: () => void;
	error: string | undefined;
};

const SearchForm: React.FC<Props> = ({ register, onSubmit, error }) => {
	return (
		<form className="flex flex-col text-center gap-y-1" onSubmit={onSubmit}>
			<div className="flex flex-row-reverse items-center justify-center  gap-x-4 w-[200px] mx-auto px-5 h-[50px]  rounded-xl border-2">
				<input
					type="search"
					{...register}
					placeholder="Enter an image name "
					className="focus:outline-none"
				/>
				<button className="bg-main border border-main text-white py-2 px-3 rounded-l-xl h-full">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
			{error && <i className="text-red-800">{error}</i>}
		</form>
	);
};

export default SearchForm;

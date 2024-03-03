import Gallery from "../../components/common/Gallery";

import { useForm } from "react-hook-form";
import SearchForm from "../../components/Home/SearchForm";
import { newSearchTerm } from "../../app/api/searchSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { SelectCurrentSearchTerm } from "../../app/api/searchSlice";
type FormData = {
	search: string;
};

const Home: React.FC = () => {
	const { register, handleSubmit, formState } = useForm<FormData>();
	const dispatch = useAppDispatch();
	const SearchTerm = useAppSelector(SelectCurrentSearchTerm) as string;
	const onSubmit = handleSubmit((data) => {
		dispatch(newSearchTerm(data.search));
	});
	return (
		<main>
			<h1 className="text-4xl text-center my-6">Gallery</h1>

			<section className="flex flex-col gap-y-10">
				<SearchForm
					onSubmit={onSubmit}
					register={register("search", {})}
					error={formState.errors.search?.message}
				/>

				<Gallery SearchTerm={SearchTerm} />
			</section>
		</main>
	);
};

export default Home;

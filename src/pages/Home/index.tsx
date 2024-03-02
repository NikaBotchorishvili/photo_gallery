import Gallery from "../../components/Home/Gallery";

import { useForm } from "react-hook-form";
import SearchForm from "../../components/Home/SearchForm";
import { newSearchTerm } from "../../app/api/searchSlice";
import { useAppDispatch } from "../../app/hooks";

type FormData = {
	search: string;
};

const Home: React.FC = () => {
	const { register, handleSubmit, formState } =
		useForm<FormData>();
	const dispatch = useAppDispatch();
	const onSubmit = handleSubmit((data) => {
		dispatch(newSearchTerm(data.search));
	});
	return (
		<main>
			<h1 className="text-4xl text-center my-6">Gallery</h1>

			<section className="flex flex-col gap-y-10">
				<SearchForm
					onSubmit={onSubmit}
					register={register("search", {
						required: {
							value: true,
							message: "Required Field"
						}
					})}
					error={formState.errors.search?.message}
				/>

				<Gallery />
			</section>
		</main>
	);
};

export default Home;


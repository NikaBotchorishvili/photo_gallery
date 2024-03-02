import { useState } from "react";
import Gallery from "../../components/Home/Gallery";

import { useForm } from "react-hook-form";
import SearchForm from "../../components/Home/SearchForm";

type FormData = {
	search: string;
};

const Home: React.FC = () => {
	const { register, handleSubmit, formState } = useForm<FormData>();
	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});
	return (
		<main>
			<h1 className="text-4xl text-center my-10">Gallery</h1>

			<SearchForm
				onSubmit={onSubmit}
				register={register("search", {
					required: {
						value: true,
						message: "Search field is required",
					},
				})}
				error={formState.errors.search?.message}
			/>

			<Gallery />
		</main>
	);
};

export default Home;

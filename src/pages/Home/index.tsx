import { useEffect, useState } from "react";
import Gallery from "../../components/Home/Gallery";
import { fetchImages } from "../../libs/Fetch";
import { SubmitHandler, useForm } from "react-hook-form";
import SearchForm from "../../components/Home/SearchForm";

const API_URL = import.meta.env.VITE_UNSPLASH_API_URL;
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

type FormData = {
	search: string;
};

const Home: React.FC = () => {
	const [images, setImages] = useState<Image[]>([]);
	const { register, handleSubmit, formState } = useForm<FormData>();
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchImages(API_URL, API_KEY);
			if (data !== undefined) {
				setImages(data);
			}
		};
		fetchData();
	}, []);

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

			<Gallery images={images} />
		</main>
	);
};

export default Home;

import { apiSlice } from "../../app/api/apiSlice";

export const imagesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getImages: builder.query<Image[], { page: number }>({
			query: ({ page }) => {
				return {
					url: `/photos/?page=${page}`,
					method: "GET",
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.push(...newItems);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
		searchImages: builder.query<
			SearchResult,
			{ page: number; searchTerm: string }
		>({
			query: ({ page, searchTerm }) => {
				console.log(searchTerm);
				return {
					url: `/search/photos/?page=${page}&per_page=20&query=${searchTerm}`,
					method: "GET",
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				currentCache.results.push(...newItems.results);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
	}),
});
export const { useGetImagesQuery, useSearchImagesQuery } = imagesSlice;

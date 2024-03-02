import { apiSlice } from "../../app/api/apiSlice";

export const imagesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getImages: builder.query<Image[], number>({
			query: (page) => ({
				url: `/?page=${page}&per_page=20`,
				method: "GET",
			}),
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
			merge: (currentCache, newItems) => {
				console.log(currentCache);
				currentCache.push(...newItems);
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg !== previousArg;
			},
		}),
	}),
});
export const { useGetImagesQuery } = imagesSlice;

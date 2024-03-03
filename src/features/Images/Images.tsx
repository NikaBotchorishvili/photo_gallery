import { apiSlice } from "../../app/api/apiSlice";
export const imagesSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getImages: builder.query<Image[], { page: number }>({
			query: ({ page }) => {
				return {
					url: `/photos/?page=${page}&per_page=20`,
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
				return {
					url: `/search/photos/?page=${page}&per_page=20&query=${searchTerm}`,
					method: "GET",
				};
			},
			serializeQueryArgs: ({ endpointName, queryArgs }) => {
				return `${endpointName} ${queryArgs.searchTerm}`;
			},
			merge: (currentCache: SearchResult, newData: SearchResult) => {
				currentCache.results.push(...newData.results);
			},

			forceRefetch({ currentArg, previousArg }) {
				return currentArg?.page !== previousArg?.page;
			},
		}),
		getImageStatistics: builder.query<ImageStatistics, { imageId: string }>({
			query: ({ imageId }) => ({
				url: `/photos/${imageId}/statistics`,
				method: "GET",
			}),
			serializeQueryArgs: ({ endpointName, queryArgs }) => {
				return `${endpointName} ${queryArgs.imageId}`;
			},
		}),
	}),
});
export const { useGetImagesQuery, useSearchImagesQuery, useGetImageStatisticsQuery } = imagesSlice;

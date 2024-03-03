import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL = import.meta.env.VITE_UNSPLASH_API_URL;
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const baseQuery = fetchBaseQuery({
	baseUrl: `${API_URL}`,
	cache: "force-cache",
	prepareHeaders: (headers) => {
		headers.set("Authorization", `Client-ID ${API_KEY}`);
		return headers;
	},
});

export const apiSlice = createApi({
	baseQuery: baseQuery,
	endpoints: (_) => ({}),
});

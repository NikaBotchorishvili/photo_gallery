import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type State = {
    searchTerms: string[]
    searchTerm: string;
}

const initialState: State = {
    searchTerms: [],
    searchTerm: ""
};
const searchSlice = createSlice({
	name: "Search",
	initialState,
	reducers: {
		newSearchTerm: (state, { payload }: {payload: string}) => {
			if(payload !== "" && payload.trim() !== ""){
				state.searchTerms.push(payload);
			}
            state.searchTerm = payload
		},
		setSearchTerm: (state, { payload }) => {
			state.searchTerm = payload;
		}
	},
});


export const { newSearchTerm, setSearchTerm } = searchSlice.actions;

export const SelectSearchTerms = (state: RootState) => state.search.searchTerms;
export const SelectCurrentSearchTerm = (state: RootState): string => state.search.searchTerm;
export default searchSlice.reducer;
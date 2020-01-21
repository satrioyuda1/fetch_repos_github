import { GET_REPOS, SEARCH } from '../config/constants';
const initialState = {
	data: [],
	valueSearch: '',
	isLoading: false,
	error: false
};

export const getRepos = (state = initialState, action) => {
	switch (action.type) {
		case `${GET_REPOS}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_REPOS}_FULFILLED`:
			return {
				...state,
				data: action.payload.data,
				isLoading: false,
				error: false
			};
		case `${GET_REPOS}_REJECTED`:
			return {
				...state,
				// data: action.payload.response.data.message,
				error: true,
				isLoading: false
			};
		case `${SEARCH}`:
			return {
				...state,
				valueSearch: action.payload,
				isLoading: false
			};
		default:
			return state;
	}
};

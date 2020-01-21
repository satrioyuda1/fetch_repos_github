import { GET_REPOS, SEARCH } from '../config/constants';
import axios from 'axios';
export const userRepos = (user) => {
	return {
		type: GET_REPOS,
		payload: axios({
			method: 'GET',
			url: `https://api.github.com/users/${user}/repos`
		})
	};
};

export const search = (user) => {
	return {
		type: SEARCH,
		payload: user
	};
};

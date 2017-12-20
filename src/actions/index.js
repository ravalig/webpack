import  axios from 'axios';

export * from './actions_products';

import {
	FETCH_ASSET_LOOKUP,
} from './types';

const ROOT_URL = "localhost:8000/";

export function fetchAssetLookup(searchTerm) {
	const url = `${ROOT_URL}asset_lookup/${searchTerm}`;
	const request = axios.get(url);
	return {
		type: FETCH_ASSET_LOOKUP,
		payload: request
	};
}

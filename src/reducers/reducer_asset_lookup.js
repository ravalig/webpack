import { FETCH_ASSET_LOOKUP } from "../actions/types";

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_ASSET_LOOKUP:
			return action.payload.data;
		default:
      return state;
	}
}
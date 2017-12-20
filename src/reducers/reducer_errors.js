import { ERROR } from "../actions/types";

export default function(state = {}, action) {
	switch(action.type) {
		case ERROR:
			return action.error;
		default:
      return state;
	}
}
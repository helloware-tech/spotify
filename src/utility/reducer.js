export const initialState = {
	user: null,
	playLists: [],
	playing: false,
	item: null,
	// quitar al terminar
	token:  null/* 'BQCI-EgAmbmjB2qxuWU2a-E78AEppFIGXOuwiE1K_3Z26OZ_J5…GXSTirZ4OFS7P65pSAQPpNTKTxU7C1WZYnILyDFEqAyv7nEvj' */,
};

const reducer = (state, action) => {
	//  Action -> type, [payload]

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

			case 'SET_PLAYLISTS':
				return {
					...state,
					playLists: action.playLists,
				};
				case 'SET_CATEGORY':
					return {
						...state,
						category: action.category,
					};
					case 'SET_DISCOVER_WEEKLY':
						return {
							...state,
							discoverWeekly: action.discoverWeekly,
						};


		default:
			return state;
	}
};

export default reducer;

import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actions";
const initialState =  {
    myFavorite: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE: {
            return {...state, 
                allCharacters: action.payload,
                myFavorite: action.payload
            };
        }
        case REMOVE_FAVORITE: {
            return {...state, 
                myFavorite: action.payload,
                allCharacters: action.payload
            };
        }
        case FILTER_CARDS: {
            return {...state, myFavorite: action.payload === 'All' ? state.allCharacters : state.allCharacters.filter((char) => char.gender === action.payload)
            }
        }
        case ORDER_CARDS: {
            return {...state,
            myFavorite: state.allCharacters.sort((a, b) => {
                if (a.id < b.id) {
                    return action.payload === 'A' ? -1 : 1;
                  }
                if (a.id > b.id) {
                    return action.payload === 'A' ? 1 : -1;
                  }
                return 0;
            })};
        }
        default: {
            return {...state};
        }
    }

}

export default rootReducer;
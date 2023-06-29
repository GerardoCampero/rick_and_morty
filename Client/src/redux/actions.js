import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVOTIRE';
export const FILTER_CARDS = 'FILTER_CARDS'
export const ORDER_CARDS = 'ORDER_CARDS'

// export const addFavorite = (character) => {
//     return {type: ADD_FAVORITE, payload: character};
// }

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    
    
    return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);
         return dispatch({
            type: ADD_FAVORITE,
            payload: data,
         });
      } catch (error) {
         console.error(error);
      }

    };
 };

// export const removeFavorite = (id) => {
//     return {type: REMOVE_FAVORITE, payload: id};
// }

export const removeFavorite = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const { data } =  await axios.delete(endpoint);
         return dispatch({
            type: REMOVE_FAVORITE,
            payload: data,
         });
      } catch (error) {
         console.log(error)
      }
   };
};

export const filterCards = (gender) => {
    return {type: FILTER_CARDS, payload: gender};
}

export const orderCards = (order) => {
    return {type: ORDER_CARDS, payload: order};
}
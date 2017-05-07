import { GET_STORES, GET_STORE } from '../actions';

const INITIAL_STATE = { stores: [], store: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_STORES:
      return { ...state, stores: action.payload.data };
    // case GET_STORE:
    //   console.log(action.payload.all, action.payload.id);
    //   let store = action.payload.all.then(res=>res.data.filter(store => store.nid[0].value === action.payload.id));
    //   console.log(store);
    //   return { ...state, store };
    default:
      return state;
  }
}

import axios from 'axios';

export const GET_STORES = 'GET_STORES';
export const GET_STORE = 'GET_STORE';

const ROOT_URL = 'http://vsada.new.antiqueplazamesa.com/cms/api/stores';

export function getStores() {
  const req = axios.get(ROOT_URL);
  return {
    type: GET_STORES,
    payload: req,
  };
}

// export function getStore(id) {
//   const req = axios.get(ROOT_URL);
//   return {
//     type: GET_STORE,
//     payload: {
//       all: req,
//       id,
//     },
//   };
// }

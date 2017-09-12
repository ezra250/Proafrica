import axios from 'axios';

export const LOADQUOTES = 'LOADQUOTES';
export const LOADQUOTESERRORS = 'LOADQUOTESERRORS';
export const LOADQUOTESSUCCESS = 'LOADQUOTESSUCCESS';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

function loadQuotesPending(isLoadingPending){
  return{
    type: LOADQUOTES,
    isLoadingPending
  };
}

  function loadingSuccess(isSuccess){
    return{
      type: LOADQUOTESSUCCESS,
      isSuccess
    }
  }

  function loadingError(isErrors){
    return{
      type: LOADQUOTESERRORS,
      isErrors
    }
  }

  function itemsFetchDataSuccess(items) {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}

  export function getAllQuotes() {
    return dispatch => {
      return axios.get("/quotes/data.json");
    }
  }

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

  export function getAllQuotes(url) {
    return dispatch => {
      dispatch(loadQuotesPending(true));
      dispatch(loadingSuccess(false));
      dispatch(loadingError(null));

      fetch(url).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        dispatch(loadQuotesPending(false));
        dispatch(loadingSuccess(true));
        return response;
      })
      .then((response) => response.json())
      .then((items) => {
        dispatch(itemsFetchDataSuccess(items))
      })
      .catch(err => {
          dispatch(loadQuotesPending(false));
          dispatch(loadingSuccess(false));
          dispatch(loadingError(err));
      })
    }
  }

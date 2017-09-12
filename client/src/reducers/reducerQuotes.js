import { LOADQUOTES, LOADQUOTESERRORS, LOADQUOTESSUCCESS,ITEMS_FETCH_DATA_SUCCESS } from '../action/Quotes';

const reducer =  (state =[], action) => {
  switch (action.type) {
    case LOADQUOTES:
        return{
          ...state,
          isLoadingPending : action.isLoadingPending
        }
      case LOADQUOTESSUCCESS:
          return{
            ...state,
            isSuccess : action.isSuccess
          }
      case ITEMS_FETCH_DATA_SUCCESS:
          return{
            ...state,
            items: action.items
          }
      case LOADQUOTESERRORS:
          return{
            ...state,
            isErrors : action.isErrors
          }
    default:
      return state
  }
}
export default reducer;

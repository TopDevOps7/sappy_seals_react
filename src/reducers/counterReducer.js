const initialState = {
  itemsRemaining: 0,
  itemsAvailable: 0,
};

function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "SAVEDATA":
      return {
        ...state,
        itemsRemaining: action.itemsRemaining,
        itemsAvailable: action.itemsAvailable,
      };
    default:
      return state;
  }
}
export default reducer;

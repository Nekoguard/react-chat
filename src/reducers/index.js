const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MESSAGE_ADDED":
      return [
        ...state,
        action.payload
      ];
    case "MESSAGE_DELETED":
      let deletedMessageIdx;

      state.forEach(message => {
        if (message === action.payload) {
          deletedMessageIdx = state.findIndex(item => item === message);
        }
      });

      return [
        ...state.slice(0, deletedMessageIdx),
        ...state.slice(deletedMessageIdx + 1)
      ];
    default:
      return state;
  }
};

export default reducer;

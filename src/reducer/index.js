export const reducer = (state, action) => {
  switch (action.type) {
    case "":
      return {
        ...state,
        action,
      };

    default:
      return state;
  }
};

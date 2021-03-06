export const productsInitialState = [];

const productsReducer = (state = productsInitialState, action) => {
  switch (action.type) {
    case "SET PRODUCTS":
      return [...action.payload];
    default:
      return state;
  }
};

export default productsReducer;

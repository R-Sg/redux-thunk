import { combineReducers } from "redux";

import cartReducer from "./components/Cart/Cart.reducer";
import productsReducer from "./reducers/product.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;

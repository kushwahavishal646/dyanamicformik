import { combineReducers } from "redux";

import ShoppingCartReducer from "../redux/reducer";

export const RootReducer = combineReducers({
  shoppingCart: ShoppingCartReducer,
});

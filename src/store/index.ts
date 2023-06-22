import { TypedUseSelectorHook, useSelector } from "react-redux";

import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { createEpicMiddleware } from "redux-observable";

import { RootAction } from "./RootActions";
import { RootReducer } from "./RootReducer";
import RootState from "./RootState";

export type RootStateType = ReturnType<typeof RootReducer>;

const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState
>();

const configureStore = () => {
  const middlewares = [epicMiddleware];
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(RootReducer, enhancer);
  return store;
};

const RootStore = configureStore();

export const useTypedSelector: TypedUseSelectorHook<RootStateType> =
  useSelector;
export default RootStore;

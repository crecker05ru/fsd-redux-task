import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { articlesModel } from "entities/articles";

const rootReducer = combineReducers({
  articles: articlesModel.stores.articlesSlice.reducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true
})

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type Appthunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown,Action<string>>
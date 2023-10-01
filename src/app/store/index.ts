import { Action, ThunkAction, combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { articlesModel } from "entities/articles";
import { articlesrtkApi } from "shared/api/rtk-query/articleService";

const rootReducer = combineReducers({
  articles: articlesModel.stores.articlesSlice.reducer,
  [articlesrtkApi.reducerPath]: articlesrtkApi.reducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(articlesrtkApi.middleware),
  devTools: true
})

export type RootState  = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type Appthunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown,Action<string>>
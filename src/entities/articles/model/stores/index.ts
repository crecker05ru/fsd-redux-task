import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArticlesList } from "shared/api/articles";
import { IArticle } from "shared/api/models";

export const fetchArticles = createAsyncThunk('articles/fetchArticles',async () => {
  return getArticlesList()
})

interface IArtcilesState {
  articles: null | IArticle[]
  articlesMessage: string
  isArticlesLoading: boolean
}
const initialState: IArtcilesState = {
  articles: null,
  articlesMessage: '',
  isArticlesLoading: false,
}
export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isArticlesLoading = true;
    }).addCase(fetchArticles.fulfilled,(state,action) => {
      state.articles = action.payload.data
      state.isArticlesLoading = false
      state.articlesMessage = 'Successfull'
    }).addCase(fetchArticles.rejected,(state,action) => {
      state.isArticlesLoading = false
      state.articlesMessage = String(action.payload)
    })
  }
})

export const { setArticles } = articlesSlice.actions
export default articlesSlice.reducer
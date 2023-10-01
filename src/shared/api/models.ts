export interface IArticle {
  userId: number
  id: number
  title: string
  body: string
}

export interface IArticles {
  articles: IArticle[]
}
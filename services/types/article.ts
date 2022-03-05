export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  content?: any;
};

export type ArticleField = keyof Article;
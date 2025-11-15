export interface Author {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  social: {
    twitter: string;
    linkedin: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  authorId: number;
  author?: Author;
  categories: string[];
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  views: number;
  relatedPosts?: RelatedPost[];
}

export interface RelatedPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  readingTime: number;
}

export interface BlogData {
  authors: Author[];
  categories: string[];
  posts: BlogPost[];
  stats: {
    totalPosts: number;
    totalAuthors: number;
    totalCategories: number;
    totalViews: number;
  };
}

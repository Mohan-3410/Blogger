import blogData from '@/data/blogData.json';
import { BlogPost, BlogData, Author } from './types';

const data = blogData as BlogData;

export function getAllPosts(): BlogPost[] {
  return data.posts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return data.posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return data.posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return data.posts
    .filter(post => post.categories.includes(category))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostsByTag(tag: string): BlogPost[] {
  return data.posts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllCategories(): string[] {
  return data.categories;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  data.posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAuthors(): Author[] {
  return data.authors;
}

export function getAuthorById(id: number): Author | undefined {
  return data.authors.find(author => author.id === id);
}

export function searchPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return data.posts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getBlogStats() {
  return data.stats;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  categorySlug?: string;
  featured?: boolean;
  gradient?: string;
}

export const blogCategories: unknown[] = [];
export const blogPosts: BlogPost[] = [];

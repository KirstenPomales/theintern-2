export interface BlogPost {
  title: string;
  date: string;
  filename: string;
  excerpt: string;
  content?: string;
}

export interface BlogPostMetadata {
  title: string;
  date: string;
  excerpt: string;
}

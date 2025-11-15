import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/types';
import { formatDate } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                {post.author && (
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">{post.author.name}</span>
                  </div>
                )}
                <span className="text-gray-400">•</span>
                <time className="text-sm text-gray-600">{formatDate(post.publishedAt)}</time>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {post.title}
              </h2>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{post.readingTime} min read</span>
                <span>•</span>
                <span>{post.views.toLocaleString()} views</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="card h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            {post.author && (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-700 truncate">
                {post.author?.name}
              </p>
              <time className="text-xs text-gray-500">{formatDate(post.publishedAt)}</time>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
            <span>{post.readingTime} min read</span>
            <span>{post.views.toLocaleString()} views</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-3">
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

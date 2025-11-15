import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getFeaturedPosts, getAllPosts, getBlogStats } from '@/lib/blog';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 6);
  const stats = getBlogStats();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Blogger
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Discover insightful articles on web development, technology trends, and software engineering best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
                Explore Articles
              </Link>
              <Link href="/about" className="btn-secondary bg-primary-800 text-white hover:bg-primary-900">
                About Us
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.totalPosts}+</div>
              <div className="text-primary-200">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.totalAuthors}+</div>
              <div className="text-primary-200">Authors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{stats.totalCategories}+</div>
              <div className="text-primary-200">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{Math.round(stats.totalViews / 1000)}K+</div>
              <div className="text-primary-200">Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <Link
                href="/blog"
                className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
              >
                View All
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <div
                  key={post.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <BlogCard post={post} featured={true} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
            >
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div
                key={post.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-primary-100 mb-8 text-lg">
            Subscribe to our newsletter and get the latest articles delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

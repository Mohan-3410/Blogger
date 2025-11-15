import Image from 'next/image';
import { Metadata } from 'next';
import { getAuthors, getBlogStats } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Blogger and our mission to provide quality tech content.',
};

export default function AboutPage() {
  const authors = getAuthors();
  const stats = getBlogStats();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Blogger</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're passionate about sharing knowledge and helping developers grow through high-quality technical content.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              At Blogger, we believe that knowledge should be accessible to everyone. Our mission is to create 
              a platform where developers, designers, and tech enthusiasts can find insightful articles, tutorials, 
              and guides that help them stay current with the latest technologies and best practices.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We cover a wide range of topics including web development, mobile development, cloud computing, 
              DevOps, AI & Machine Learning, and more. Our team of experienced writers and developers work 
              tirelessly to ensure that every article is accurate, well-researched, and practical.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're just starting your journey in tech or you're a seasoned professional, you'll find 
              valuable content that helps you learn, grow, and stay ahead in your career.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="text-5xl font-bold text-primary-600 mb-2">{stats.totalPosts}+</div>
              <div className="text-gray-600 font-medium">Published Articles</div>
            </div>
            <div className="text-center animate-slide-up animation-delay-200">
              <div className="text-5xl font-bold text-primary-600 mb-2">{stats.totalAuthors}+</div>
              <div className="text-gray-600 font-medium">Expert Authors</div>
            </div>
            <div className="text-center animate-slide-up animation-delay-400">
              <div className="text-5xl font-bold text-primary-600 mb-2">{stats.totalCategories}+</div>
              <div className="text-gray-600 font-medium">Tech Categories</div>
            </div>
            <div className="text-center animate-slide-up animation-delay-600">
              <div className="text-5xl font-bold text-primary-600 mb-2">{Math.round(stats.totalViews / 1000)}K+</div>
              <div className="text-gray-600 font-medium">Monthly Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <div
                key={author.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{author.bio}</p>
                    <div className="flex gap-4 mb-4">
                      <a
                        href={`https://twitter.com/${author.social.twitter.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href={`https://linkedin.com/in/${author.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href={`mailto:${author.email}`}
                      className="text-sm text-gray-500 hover:text-primary-600 transition-colors duration-200"
                    >
                      {author.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md animate-slide-up">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every article goes through rigorous review to ensure accuracy, clarity, and practical value for our readers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md animate-slide-up animation-delay-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Learning</h3>
              <p className="text-gray-600">
                We stay up-to-date with the latest technologies and trends to bring you the most current information.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md animate-slide-up animation-delay-400">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                We listen to our readers and create content that addresses real challenges faced by the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter and never miss an update on the latest tech trends and tutorials.
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

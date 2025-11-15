import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Blogger - Modern Tech Blog',
    template: '%s | Blogger'
  },
  description: 'Your source for the latest insights on web development, technology, and software engineering best practices.',
  keywords: ['blog', 'technology', 'web development', 'programming', 'software engineering'],
  authors: [{ name: 'Blogger Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blogger.com',
    title: 'Blogger - Modern Tech Blog',
    description: 'Your source for the latest insights on web development, technology, and software engineering best practices.',
    siteName: 'Blogger',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogger - Modern Tech Blog',
    description: 'Your source for the latest insights on web development, technology, and software engineering best practices.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

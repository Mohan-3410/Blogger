const fs = require('fs');
const path = require('path');

// Helper function to generate random date
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Authors data
const authors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    bio: 'Senior Technology Writer with 10+ years of experience in web development and cloud computing.',
    email: 'sarah.johnson@blogger.com',
    social: {
      twitter: '@sarahjohnson',
      linkedin: 'sarah-johnson'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    bio: 'Full-stack developer and tech enthusiast. Passionate about JavaScript and modern web frameworks.',
    email: 'michael.chen@blogger.com',
    social: {
      twitter: '@michaelchen',
      linkedin: 'michael-chen'
    }
  },
  {
    id: 3,
    name: 'Emily Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    bio: 'UX/UI Designer turned writer. Loves exploring the intersection of design and technology.',
    email: 'emily.davis@blogger.com',
    social: {
      twitter: '@emilydavis',
      linkedin: 'emily-davis'
    }
  },
  {
    id: 4,
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    bio: 'DevOps engineer and cloud architecture specialist. Writing about infrastructure and automation.',
    email: 'james.wilson@blogger.com',
    social: {
      twitter: '@jameswilson',
      linkedin: 'james-wilson'
    }
  },
  {
    id: 5,
    name: 'Sophia Martinez',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    bio: 'AI and Machine Learning researcher. Making complex topics accessible to everyone.',
    email: 'sophia.martinez@blogger.com',
    social: {
      twitter: '@sophiamartinez',
      linkedin: 'sophia-martinez'
    }
  }
];

// Categories
const categories = [
  'Web Development',
  'Mobile Development',
  'Cloud Computing',
  'DevOps',
  'AI & Machine Learning',
  'Design',
  'Security',
  'Best Practices',
  'Career',
  'Tools & Resources'
];

// Blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14: A Comprehensive Guide',
    slug: 'getting-started-with-nextjs-14',
    excerpt: 'Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.',
    content: `
# Getting Started with Next.js 14: A Comprehensive Guide

Next.js 14 has revolutionized the way we build web applications. With its powerful features like Server Components, improved performance, and enhanced developer experience, it's become the go-to framework for React developers.

## What's New in Next.js 14?

Next.js 14 brings several exciting features:

- **Turbopack**: 53% faster local server startup and 94% faster code updates
- **Server Actions**: Simplified data mutations without API routes
- **Partial Prerendering**: Combines static and dynamic rendering in a single route
- **Improved Metadata API**: Better SEO out of the box

## Setting Up Your First Project

Getting started is incredibly simple. You can create a new Next.js project with:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

This will set up a new project with all the latest features configured for you.

## Understanding the App Router

The App Router is built on React Server Components, allowing you to write components that render on the server. This provides better performance and SEO benefits.

### Creating Your First Route

Routes are defined by the folder structure in the \`app\` directory. Each folder represents a route segment, and a \`page.tsx\` file makes the route publicly accessible.

## Conclusion

Next.js 14 is a powerful framework that makes building modern web applications easier than ever. With its focus on performance and developer experience, it's an excellent choice for your next project.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    authorId: 1,
    categories: ['Web Development', 'Tools & Resources'],
    tags: ['nextjs', 'react', 'web-development', 'tutorial'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 8,
    featured: true,
    views: 12450
  },
  {
    id: 2,
    title: 'Mastering React Hooks: From Basics to Advanced Patterns',
    slug: 'mastering-react-hooks',
    excerpt: 'Dive deep into React Hooks and learn how to use them effectively in your applications with practical examples.',
    content: `
# Mastering React Hooks: From Basics to Advanced Patterns

React Hooks have transformed the way we write React components. Let's explore the most important hooks and advanced patterns.

## Understanding useState and useEffect

These are the most fundamental hooks you'll use in every React application. \`useState\` manages component state, while \`useEffect\` handles side effects.

### Best Practices

1. Always keep your state minimal
2. Use multiple useState calls for unrelated state
3. Clean up effects to prevent memory leaks

## Custom Hooks

Custom hooks allow you to extract component logic into reusable functions. They're one of the most powerful features of React.

## Performance Optimization

Use \`useMemo\` and \`useCallback\` to optimize expensive computations and prevent unnecessary re-renders.

## Conclusion

Mastering React Hooks is essential for modern React development. Practice these patterns and you'll write cleaner, more maintainable code.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
    authorId: 2,
    categories: ['Web Development'],
    tags: ['react', 'hooks', 'javascript', 'frontend'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 12,
    featured: true,
    views: 9820
  },
  {
    id: 3,
    title: 'Building Scalable Microservices with Node.js',
    slug: 'building-scalable-microservices-nodejs',
    excerpt: 'Learn best practices for building and deploying microservices architecture using Node.js and modern DevOps tools.',
    content: `
# Building Scalable Microservices with Node.js

Microservices architecture has become the standard for building scalable applications. Let's explore how to implement it with Node.js.

## What Are Microservices?

Microservices are small, independent services that work together to form a complete application. Each service focuses on a specific business capability.

## Key Principles

- **Single Responsibility**: Each service should do one thing well
- **Independence**: Services should be deployable independently
- **Decentralization**: Avoid centralized data management
- **Resilience**: Services should handle failures gracefully

## Implementation with Node.js

Node.js is perfect for microservices due to its lightweight nature and non-blocking I/O.

## Communication Patterns

Services can communicate through REST APIs, message queues, or event streams. Choose based on your requirements.

## Conclusion

Microservices offer great flexibility but come with complexity. Start small and evolve your architecture as needed.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    authorId: 4,
    categories: ['Web Development', 'DevOps', 'Cloud Computing'],
    tags: ['nodejs', 'microservices', 'architecture', 'backend'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 15,
    featured: true,
    views: 7650
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox: When to Use Which',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'A comprehensive comparison of CSS Grid and Flexbox, helping you choose the right layout system for your project.',
    content: `
# CSS Grid vs Flexbox: When to Use Which

CSS Grid and Flexbox are both powerful layout systems, but they excel in different scenarios. Let's understand when to use each.

## Flexbox: One-Dimensional Layouts

Flexbox is designed for one-dimensional layouts - either rows or columns. It's perfect for:
- Navigation bars
- Card layouts
- Centered content
- Distributing space among items

## CSS Grid: Two-Dimensional Layouts

Grid excels at two-dimensional layouts where you need control over both rows and columns:
- Page layouts
- Image galleries
- Complex forms
- Dashboard layouts

## Can They Work Together?

Absolutely! Grid for the overall page structure and Flexbox for component-level layouts is a winning combination.

## Conclusion

Choose Flexbox for simpler, one-dimensional layouts and Grid for complex, two-dimensional designs. Often, you'll use both!
    `,
    featuredImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
    authorId: 3,
    categories: ['Design', 'Web Development'],
    tags: ['css', 'flexbox', 'grid', 'layout', 'frontend'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 6,
    featured: false,
    views: 5430
  },
  {
    id: 5,
    title: 'Introduction to Machine Learning with Python',
    slug: 'intro-to-machine-learning-python',
    excerpt: 'Start your machine learning journey with Python. Learn the basics of ML algorithms and how to implement them.',
    content: `
# Introduction to Machine Learning with Python

Machine Learning is transforming industries. Let's start your ML journey with Python, the most popular language for ML.

## What is Machine Learning?

ML is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.

## Types of Machine Learning

- **Supervised Learning**: Learning from labeled data
- **Unsupervised Learning**: Finding patterns in unlabeled data
- **Reinforcement Learning**: Learning through interaction with an environment

## Essential Python Libraries

- **NumPy**: Numerical computing
- **Pandas**: Data manipulation
- **Scikit-learn**: Machine learning algorithms
- **TensorFlow/PyTorch**: Deep learning

## Your First ML Model

Let's build a simple linear regression model to predict house prices. We'll use scikit-learn to make it easy.

## Conclusion

Machine Learning is an exciting field with endless possibilities. Start with the basics and gradually explore more complex algorithms.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    authorId: 5,
    categories: ['AI & Machine Learning'],
    tags: ['python', 'machine-learning', 'ai', 'data-science'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 10,
    featured: false,
    views: 8920
  },
  {
    id: 6,
    title: 'Docker Best Practices for Production',
    slug: 'docker-best-practices-production',
    excerpt: 'Learn essential Docker best practices to optimize your containers for production environments.',
    content: `
# Docker Best Practices for Production

Docker has revolutionized application deployment. Here are essential best practices for production environments.

## Image Optimization

- Use official base images
- Minimize layer count
- Use multi-stage builds
- Don't run containers as root

## Security Considerations

Security should be your top priority:
- Scan images for vulnerabilities
- Use specific image versions (not 'latest')
- Limit container resources
- Use secrets management

## Networking and Storage

Proper network configuration and persistent storage are crucial for production deployments.

## Monitoring and Logging

Implement comprehensive monitoring and centralized logging to track container health and debug issues.

## Conclusion

Following these best practices will help you run Docker containers reliably and securely in production.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    authorId: 4,
    categories: ['DevOps', 'Cloud Computing', 'Best Practices'],
    tags: ['docker', 'containers', 'devops', 'production'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 9,
    featured: false,
    views: 6540
  },
  {
    id: 7,
    title: 'TypeScript Tips and Tricks for Better Code',
    slug: 'typescript-tips-and-tricks',
    excerpt: 'Discover advanced TypeScript features and patterns that will make your code more type-safe and maintainable.',
    content: `
# TypeScript Tips and Tricks for Better Code

TypeScript adds powerful type checking to JavaScript. Here are tips to leverage it effectively.

## Advanced Types

Learn about utility types, conditional types, and mapped types to write more flexible code.

## Type Guards and Narrowing

Use type guards to narrow types and make your code more type-safe at runtime.

## Generics

Generics allow you to write reusable, type-safe components and functions.

## Best Practices

- Use strict mode
- Avoid 'any' type
- Prefer interfaces over types for objects
- Use const assertions

## Conclusion

TypeScript significantly improves code quality and developer experience. These tips will help you use it more effectively.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    authorId: 2,
    categories: ['Web Development', 'Best Practices'],
    tags: ['typescript', 'javascript', 'programming', 'types'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 7,
    featured: false,
    views: 5820
  },
  {
    id: 8,
    title: 'Modern Authentication Strategies for Web Apps',
    slug: 'modern-authentication-strategies',
    excerpt: 'Explore different authentication methods including JWT, OAuth2, and session-based auth for your web applications.',
    content: `
# Modern Authentication Strategies for Web Apps

Authentication is critical for securing web applications. Let's explore modern strategies.

## Session-Based Authentication

Traditional approach using cookies and server-side sessions. Simple but has scalability challenges.

## Token-Based Authentication (JWT)

JSON Web Tokens provide a stateless authentication mechanism. Perfect for microservices and mobile apps.

## OAuth 2.0 and OpenID Connect

Industry standards for delegated authorization and authentication. Essential for "Login with Google/Facebook" features.

## Best Practices

- Always use HTTPS
- Implement refresh tokens
- Store tokens securely
- Use strong password policies
- Implement rate limiting

## Conclusion

Choose the authentication strategy that best fits your application's needs and security requirements.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    authorId: 1,
    categories: ['Security', 'Web Development', 'Best Practices'],
    tags: ['authentication', 'security', 'jwt', 'oauth'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 11,
    featured: false,
    views: 7230
  },
  {
    id: 9,
    title: 'Building Progressive Web Apps (PWAs)',
    slug: 'building-progressive-web-apps',
    excerpt: 'Learn how to create Progressive Web Apps that work offline and provide a native app-like experience.',
    content: `
# Building Progressive Web Apps (PWAs)

Progressive Web Apps combine the best of web and mobile apps. Let's learn how to build them.

## What Makes a PWA?

PWAs are web apps that use modern web capabilities to deliver an app-like experience:
- Work offline
- Fast loading
- Installable
- Re-engageable with push notifications

## Core Technologies

- **Service Workers**: Enable offline functionality
- **Web App Manifest**: Makes your app installable
- **HTTPS**: Required for PWAs

## Implementation Steps

1. Create a manifest.json file
2. Register a service worker
3. Implement caching strategies
4. Add offline fallback pages

## Benefits

- Cross-platform compatibility
- No app store approval needed
- Lower development costs
- Automatic updates

## Conclusion

PWAs offer a great way to reach users across all platforms with a single codebase.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    authorId: 1,
    categories: ['Mobile Development', 'Web Development'],
    tags: ['pwa', 'service-worker', 'mobile', 'progressive'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 8,
    featured: false,
    views: 4920
  },
  {
    id: 10,
    title: 'GraphQL vs REST: Making the Right Choice',
    slug: 'graphql-vs-rest',
    excerpt: 'Compare GraphQL and REST APIs to understand which one is best suited for your next project.',
    content: `
# GraphQL vs REST: Making the Right Choice

Both GraphQL and REST are powerful API architectures. Let's understand when to use each.

## REST: The Traditional Approach

REST has been the standard for web APIs for years:
- Simple and well-understood
- Great caching support
- Multiple endpoints for different resources

## GraphQL: The Modern Alternative

GraphQL allows clients to request exactly what they need:
- Single endpoint
- No over-fetching or under-fetching
- Strong typing
- Great for complex data requirements

## When to Use REST

- Simple, straightforward APIs
- When caching is crucial
- Public APIs with diverse clients

## When to Use GraphQL

- Complex data relationships
- Mobile apps with bandwidth constraints
- Rapid frontend development

## Conclusion

Both have their place. Choose based on your specific requirements, team expertise, and use case.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    authorId: 2,
    categories: ['Web Development', 'Best Practices'],
    tags: ['graphql', 'rest', 'api', 'backend'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 9,
    featured: false,
    views: 6780
  },
  {
    id: 11,
    title: 'Web Performance Optimization Techniques',
    slug: 'web-performance-optimization',
    excerpt: 'Discover practical techniques to improve your website\'s performance and deliver better user experiences.',
    content: `
# Web Performance Optimization Techniques

Website performance directly impacts user experience and conversion rates. Let's optimize!

## Measuring Performance

Before optimizing, measure your current performance:
- Use Lighthouse
- Monitor Core Web Vitals
- Implement Real User Monitoring

## Image Optimization

Images often account for most of a page's weight:
- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Use responsive images
- Compress images

## Code Optimization

- Minify CSS, JavaScript
- Remove unused code
- Use code splitting
- Implement tree shaking

## Caching Strategies

Proper caching can dramatically improve performance:
- Browser caching
- CDN caching
- Service worker caching

## Conclusion

Performance optimization is an ongoing process. Regular monitoring and incremental improvements lead to great results.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    authorId: 3,
    categories: ['Web Development', 'Best Practices'],
    tags: ['performance', 'optimization', 'web-vitals', 'speed'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 10,
    featured: false,
    views: 8340
  },
  {
    id: 12,
    title: 'The Future of Web Development: 2024 and Beyond',
    slug: 'future-of-web-development-2024',
    excerpt: 'Explore emerging trends and technologies that will shape the future of web development.',
    content: `
# The Future of Web Development: 2024 and Beyond

The web development landscape is constantly evolving. Let's look at what's coming next.

## AI-Assisted Development

AI tools are revolutionizing how we write code:
- GitHub Copilot and similar tools
- Automated testing
- Code review assistance

## Web Assembly

WASM enables near-native performance in the browser, opening new possibilities for web applications.

## Edge Computing

Moving computation closer to users for better performance and lower latency.

## Web3 and Decentralization

Blockchain technology is creating new paradigms for web applications.

## Sustainable Web Development

Focus on creating energy-efficient, environmentally conscious web applications.

## Conclusion

The future of web development is exciting. Stay curious, keep learning, and embrace new technologies.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    authorId: 5,
    categories: ['Web Development', 'Career'],
    tags: ['future', 'trends', 'ai', 'web3', 'technology'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 12,
    featured: false,
    views: 9120
  },
  {
    id: 13,
    title: 'Serverless Architecture: Pros and Cons',
    slug: 'serverless-architecture-pros-cons',
    excerpt: 'Understand the benefits and challenges of serverless architecture to make informed decisions.',
    content: `
# Serverless Architecture: Pros and Cons

Serverless computing is changing how we deploy applications. Let's examine its trade-offs.

## What is Serverless?

Despite the name, serverless doesn't mean no servers. It means you don't manage them - the cloud provider does.

## Advantages

- No server management
- Automatic scaling
- Pay only for what you use
- Faster time to market
- Built-in high availability

## Challenges

- Cold start latency
- Vendor lock-in
- Debugging complexity
- Limited execution duration
- Cost can be unpredictable at scale

## Use Cases

Perfect for:
- Event-driven applications
- Microservices
- APIs with variable traffic
- Scheduled tasks

## Conclusion

Serverless is powerful for many use cases, but it's not a silver bullet. Evaluate based on your specific needs.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    authorId: 4,
    categories: ['Cloud Computing', 'DevOps'],
    tags: ['serverless', 'cloud', 'architecture', 'aws', 'lambda'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 8,
    featured: false,
    views: 5670
  },
  {
    id: 14,
    title: 'Creating Accessible Web Applications',
    slug: 'creating-accessible-web-applications',
    excerpt: 'Learn how to build web applications that are accessible to everyone, including users with disabilities.',
    content: `
# Creating Accessible Web Applications

Web accessibility ensures everyone can use your application. It's not just good practice - it's essential.

## Why Accessibility Matters

- 15% of the world has some form of disability
- Legal requirements in many countries
- Improves UX for everyone
- Better SEO

## Key Principles (WCAG)

- **Perceivable**: Information must be presentable to users
- **Operable**: UI components must be operable
- **Understandable**: Information must be understandable
- **Robust**: Content must work with assistive technologies

## Practical Tips

- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Maintain good color contrast
- Use ARIA labels properly
- Test with screen readers

## Tools

- axe DevTools
- WAVE
- Lighthouse accessibility audit

## Conclusion

Accessibility benefits everyone. Make it a priority from the start of your project.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800',
    authorId: 3,
    categories: ['Web Development', 'Design', 'Best Practices'],
    tags: ['accessibility', 'a11y', 'wcag', 'inclusive-design'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 11,
    featured: false,
    views: 4560
  },
  {
    id: 15,
    title: 'Career Tips for Junior Developers',
    slug: 'career-tips-junior-developers',
    excerpt: 'Essential advice for junior developers starting their career in software development.',
    content: `
# Career Tips for Junior Developers

Starting your development career can be overwhelming. Here's advice to help you succeed.

## Build a Strong Foundation

Focus on fundamentals before jumping to frameworks:
- Master JavaScript/your main language
- Understand data structures and algorithms
- Learn how the web works
- Practice problem-solving

## Create a Portfolio

Build projects that showcase your skills:
- Personal projects
- Open source contributions
- Replicate popular apps
- Document your work

## Never Stop Learning

The tech industry evolves rapidly:
- Follow blogs and newsletters
- Take online courses
- Attend meetups and conferences
- Build side projects

## Soft Skills Matter

Technical skills aren't enough:
- Communication
- Teamwork
- Problem-solving
- Time management

## Networking

Connect with other developers:
- Join tech communities
- Attend meetups
- Contribute to open source
- Share your knowledge

## Conclusion

Your journey as a developer is marathon, not a sprint. Stay curious, persistent, and patient with yourself.
    `,
    featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    authorId: 1,
    categories: ['Career'],
    tags: ['career', 'junior-developer', 'learning', 'growth'],
    publishedAt: randomDate(new Date(2024, 0, 1), new Date()),
    readingTime: 7,
    featured: false,
    views: 10240
  }
];

// Add calculated fields to blog posts
const enrichedBlogPosts = blogPosts.map(post => {
  const author = authors.find(a => a.id === post.authorId);
  return {
    ...post,
    author: author,
    publishedAt: post.publishedAt.toISOString(),
    relatedPosts: blogPosts
      .filter(p => 
        p.id !== post.id && 
        p.categories.some(cat => post.categories.includes(cat))
      )
      .slice(0, 3)
      .map(p => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        featuredImage: p.featuredImage,
        publishedAt: p.publishedAt,
        readingTime: p.readingTime
      }))
  };
});

// Generate the data object
const data = {
  authors,
  categories,
  posts: enrichedBlogPosts,
  stats: {
    totalPosts: blogPosts.length,
    totalAuthors: authors.length,
    totalCategories: categories.length,
    totalViews: blogPosts.reduce((sum, post) => sum + post.views, 0)
  }
};

// Write to file
const outputPath = path.join(__dirname, 'blogData.json');
fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

console.log('✅ Blog data generated successfully!');
console.log(`📝 ${data.posts.length} blog posts created`);
console.log(`👥 ${data.authors.length} authors created`);
console.log(`📁 ${data.categories.length} categories created`);
console.log(`📄 Data saved to: ${outputPath}`);

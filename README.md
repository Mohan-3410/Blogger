# Blogger - Enterprise Tech Blog

A modern, full-featured enterprise blogger website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful, responsive design with smooth animations and interactive elements.

## 🚀 Features

### Pages
- **Home Page** - Hero section, featured posts, recent articles, and newsletter subscription
- **Blog Listing Page** - Grid view with search, category filtering, and pagination
- **Blog Detail Page** - Full article content with author info, related posts, and comments section (UI)
- **About Page** - Team information, mission statement, and company values

### Design & UX
- ✨ Modern, interactive, and responsive design
- 🎨 Smooth animations and transitions using Tailwind CSS
- 📱 Mobile-first approach
- 🎯 Interactive hover effects and scroll animations
- 🌈 Clean and professional UI with consistent color scheme
- ⚡ Optimized performance with Next.js Image component

### Functionality
- 🔍 Full-text search functionality
- 🏷️ Category and tag filtering
- 📖 Reading time estimation
- 👥 Author profiles and bios
- 🔗 Social share buttons
- 💬 Comments section (UI only)
- 📧 Newsletter subscription form (UI only)
- 📊 Blog statistics display

### Technical Features
- Built with Next.js 14 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- SEO-optimized with proper meta tags
- Responsive images with Next.js Image component
- Static site generation for optimal performance
- Clean, maintainable code structure

## 📁 Project Structure

```
Blogger/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing page
│   │   └── [slug]/        # Dynamic blog post pages
│   │       └── page.tsx   # Individual blog post
│   └── about/             # About page
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── BlogCard.tsx      # Blog post card component
├── lib/                  # Utility functions
│   ├── types.ts         # TypeScript type definitions
│   └── blog.ts          # Blog data fetching utilities
├── data/                # Data and scripts
│   ├── generateData.js  # Dummy data generation script
│   └── blogData.json    # Generated blog data
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
└── package.json         # Project dependencies

```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation Steps

1. **Clone the repository**
# Blogger

A modern blogging platform for creating, managing, and sharing your stories with the world.

## About

Blogger is a web-based blogging platform that allows users to create and publish blog posts, manage content, and engage with readers. Built with simplicity and user experience in mind, this platform aims to provide an intuitive interface for bloggers of all skill levels.

## Features

- **User Authentication**: Secure user registration and login system
- **Post Management**: Create, edit, and delete blog posts with ease
- **Rich Text Editor**: Write content with formatting options
- **Category & Tags**: Organize posts with categories and tags
- **Comment System**: Enable reader engagement through comments
- **Responsive Design**: Mobile-friendly interface
- **Search Functionality**: Find posts quickly with built-in search
- **User Profiles**: Customizable user profiles for authors

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher) / Python (v3.8 or higher) / Java (v11 or higher) - depending on implementation
- Database system (MySQL/PostgreSQL/MongoDB)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mohan-3410/Blogger.git
   cd Blogger
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate dummy data** (already generated, but you can regenerate)
   ```bash
   npm run generate-data
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-data` - Generate dummy blog data

## 📊 Dummy Data

The project includes a data generation script that creates:
- **15 blog posts** with full content, excerpts, and metadata
- **5 authors** with profiles and social links
- **10 categories** covering various tech topics
- **Multiple tags** for content organization
- **Reading time calculations**
- **View counts and statistics**

Run `npm run generate-data` to regenerate the data. The script creates a `blogData.json` file in the `/data` directory.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Edit `data/generateData.js` to modify or add blog posts
- Run `npm run generate-data` to regenerate the data

### Styling
- Global styles: `app/globals.css`
- Component styles: Inline Tailwind classes in component files

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Build for Production
```bash
npm run build
npm start
```

## 📝 Features in Detail

### Search Functionality
Real-time search across titles, excerpts, content, and tags.

### Category Filtering
Filter posts by categories with an intuitive button interface.

### Pagination
Navigate through posts with page numbers and prev/next buttons.

### Reading Time
Automatically calculated based on content length.

### SEO Optimization
- Dynamic meta tags for each page
- OpenGraph and Twitter Card support
- Semantic HTML structure
- Optimized images

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ by the Blogger Team

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Unsplash for placeholder images
2. Install dependencies:
   ```bash
   # For Node.js projects
   npm install
   
   # For Python projects
   pip install -r requirements.txt
   
   # For Java projects
   mvn install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Set up the database:
   ```bash
   # Run database migrations
   npm run migrate
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Create an Account**: Sign up with your email address
2. **Write a Post**: Click on "New Post" to create your first blog post
3. **Publish**: Once you're happy with your content, click "Publish"
4. **Manage**: Edit or delete your posts from your dashboard
5. **Engage**: Respond to comments and interact with your readers

## Project Structure

```
Blogger/
├── src/           # Source code
├── public/        # Static files
├── tests/         # Test files
├── docs/          # Documentation
└── config/        # Configuration files
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Project Link: [https://github.com/Mohan-3410/Blogger](https://github.com/Mohan-3410/Blogger)

## Acknowledgments

- Thanks to all contributors who have helped shape this project
- Inspired by the need for a simple, user-friendly blogging platform

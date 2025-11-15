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
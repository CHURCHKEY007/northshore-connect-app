# North Shore Connect

A directory and community platform for North Shore businesses and professionals.

## Project Overview

North Shore Connect is a web application built with Next.js and Supabase that provides a directory of local businesses and professionals. The platform allows users to browse businesses by category, location, and other criteria, and provides detailed information about each business.

## Features

### Completed Features

- ✅ Business directory with categories and locations
- ✅ Business detail pages with comprehensive information
- ✅ Admin interface for managing businesses, categories, and media
- ✅ Business form with multi-step validation
- ✅ Media library with AI-powered image descriptions
- ✅ Enhanced SEO features
  - Meta title and description fields
  - SEO keywords
  - Canonical URL support
  - Structured data (JSON-LD) for businesses
  - Twitter card and Open Graph support
- ✅ Server-side rendering for maximum SEO performance

### In Progress

- ⏳ Business hours management
- ⏳ Gallery image uploads
- ⏳ User reviews and ratings
- ⏳ Blog editor (rebuilding)
- ⏳ Advanced search and filtering

## Technology Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Styling**: Tailwind CSS, shadcn/ui
- **Deployment**: Vercel (or your preferred hosting)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Supabase account and project

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/CHURCHKEY007/northshore-connect-app.git
   cd northshore-connect-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file with the following variables (see `.env.example`):
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

The project follows a feature-based organization:

```
src/
├── app/                   # Next.js app router
│   ├── admin/             # Admin pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   └── business/          # Business directory pages
├── components/            # Reusable components
│   ├── admin/             # Admin-specific components
│   ├── business/          # Business directory components  
│   ├── media/             # Media library components
│   └── ui/                # UI components
├── features/              # Feature-specific code
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and libraries
│   ├── supabase/          # Supabase client and queries
│   └── utils/             # Helper functions
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

## Documentation

Detailed documentation is available in the `docs` folder, organized by topic:

- `docs/admin/`: Admin interface documentation
- `docs/architecture/`: System architecture documentation
- `docs/blog/`: Blog system documentation
- `docs/business-directory/`: Business directory documentation
- `docs/media/`: Media library documentation

## Database Setup

The project uses Supabase for its database. Migration scripts are provided in:

- `supabase/migrations/`: For Supabase migrations
- `scripts/database/`: For database management scripts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE)

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
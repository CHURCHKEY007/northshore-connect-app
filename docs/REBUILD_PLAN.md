# Blog Editor Rebuild Plan

## Overview

This document outlines the plan for rebuilding the North Shore Connect blog editor system. The previous implementation has been removed due to architectural concerns and the need for a more SEO-optimized, server-side rendered solution.

## Components Removed

The following components and directories have been removed:

- `/src/app/admin/blog/*` - Blog admin routes and components
- `/src/app/blog/*` - Blog frontend routes and components
- `/src/components/blog/*` - Shared blog components
- Related schema and utility files

## Rebuild Principles

The rebuilt blog editor will follow these key principles:

1. **Server-Side Rendering Priority**: Use Next.js server components wherever possible
2. **Data Fetching with Supabase SSR Client**: Implement `createServerSupabaseClient()` for server component data access
3. **Client-Side Components Only for Interactivity**: Limit `"use client"` directives to interactive elements
4. **Clear Separation of Concerns**:
   - Data fetching in server components
   - Interactive UI in client components
5. **SEO Optimization**:
   - Implement proper metadata using Next.js Metadata API
   - Include structured data (JSON-LD) for all blog content
   - Optimize for social sharing

## Technical Architecture

### Server Components

- Blog listing pages
- Blog detail pages
- Category/tag pages
- Author pages

### Client Components

- WYSIWYG editor
- Image upload interface
- Template selectors
- Draft management
- Publishing controls

### Database Models

The blog system will interact with the following database tables:

- `blogs` - Blog post content and metadata
- `blog_categories` - Category classifications
- `blog_tags` - Content tagging system
- `blog_authors` - Author profiles
- `blog_media` - Associated media items

## WYSIWYG Editor Requirements

The WYSIWYG editor will be rebuilt with:

1. **TinyMCE Integration**: Properly server/client separated implementation
2. **Template Support**: Multiple blog templates (Editorial, Feature, Review, etc.)
3. **Media Management**: Inline integration with the media library
4. **SEO Tools**: Inline SEO analysis and recommendations
5. **Draft System**: Auto-saving and draft status management

## Implementation Timeline

1. **Phase 1**: Core database models and server components
2. **Phase 2**: WYSIWYG editor and client interface
3. **Phase 3**: Template system implementation
4. **Phase 4**: SEO optimization
5. **Phase 5**: Testing and deployment

## Technology Stack

- Next.js 14 with App Router
- Supabase for data storage
- TinyMCE for WYSIWYG editing
- Tailwind CSS for styling
- TypeScript for type safety

## Conclusion

This rebuild represents a significant architectural improvement that will enhance both the user experience for content creators and the SEO performance of the blog content. The new implementation will follow best practices for Next.js server components and maintain a clear separation between server and client concerns.
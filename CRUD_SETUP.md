# Portfolio CRUD System Setup Guide

This guide will help you set up the CRUD (Create, Read, Update, Delete) functionality for your portfolio website using Supabase.

## Prerequisites

1. Node.js and npm installed
2. Supabase account
3. Vercel account (optional, for deployment)

## Setup Steps

### 1. Create Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be created

### 2. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Update the following variables with your Supabase project details:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

You can find these values in your Supabase dashboard under Settings > API.

### 3. Set Up Database

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `database/migrations/001_initial_setup.sql`
4. Execute the SQL to create tables and policies

### 4. Configure Authentication

1. In your Supabase dashboard, go to Authentication > Settings
2. Add your domain to the "Site URL" field
3. Add admin email addresses to the RLS policies:
   - Edit the SQL policies to include your admin email
   - Replace `'admin@yourportfolio.com', 'your-email@gmail.com'` with your actual email

### 5. Set Up Storage (Optional)

If you want to upload images directly to Supabase:

1. Go to Storage in your Supabase dashboard
2. The `portfolio-images` bucket should already be created by the migration
3. If not, create it manually and make it public

### 6. Update Admin Emails

Update the admin emails in the following files:

- `src/contexts/AuthContext.tsx` (line 16)
- `database/migrations/001_initial_setup.sql` (multiple lines)

### 7. Test the Setup

1. Run the development server: `npm run dev`
2. Navigate to your portfolio
3. Click any "Edit" button
4. You should see the login modal
5. Enter your admin credentials
6. After successful login, you should see the CRUD modal

## Features

### Authentication

- Login modal with email/password
- Admin-only access to edit functionality
- Automatic session management

### CRUD Operations

- **Create**: Add new items to any category
- **Read**: View all items (public access)
- **Update**: Edit existing items (admin only)
- **Delete**: Remove items (admin only)

### Image Management

- Upload images directly to Supabase Storage
- Or use external image URLs
- Automatic image preview

### Categories Supported

- **ALBI**: Language learning projects
- **ALPHA**: Technology projects
- **ARC**: Achievements, Research, and Certifications

## Usage

### Adding Edit Buttons

The system automatically adds edit buttons to:

- Category headers (for editing category information)
- Individual sections/items
- Floating add buttons for new items

### Editing Content

1. Click any "Edit" button
2. If not logged in, you'll see the login modal
3. Enter admin credentials
4. The CRUD modal will open with a form
5. Edit the content and click "Save"

### Managing Images

1. In the CRUD modal, you can:
   - Upload an image file (stored in Supabase Storage)
   - Enter an image URL directly
   - Preview the image before saving

## Security

- Row Level Security (RLS) enabled on all tables
- Only admin emails can perform CRUD operations
- Public read access for all users
- Image uploads restricted to admin users

## Deployment

When deploying to Vercel or other platforms:

1. Add environment variables to your deployment platform
2. Ensure your domain is added to Supabase Auth settings
3. Update CORS settings if needed

## Troubleshooting

### Common Issues

1. **"Invalid login credentials"**: Check your email/password
2. **"Access denied"**: Ensure your email is in the admin list
3. **"Image upload failed"**: Check storage policies and permissions
4. **"Database connection failed"**: Verify environment variables

### Debug Steps

1. Check browser console for errors
2. Verify Supabase connection in Network tab
3. Check Supabase logs in dashboard
4. Ensure all migrations are applied

## Customization

### Adding New Fields

1. Update the database schema in Supabase
2. Modify the TypeScript interfaces in `src/lib/supabase.ts`
3. Update the CRUD modal form in `src/components/CRUDModal.tsx`

### Styling

The system uses Tailwind CSS classes. You can customize:

- Colors and gradients
- Button styles
- Modal appearance
- Form layouts

## Support

If you encounter issues:

1. Check the browser console for errors
2. Review Supabase dashboard logs
3. Ensure all environment variables are set correctly
4. Verify admin email configuration

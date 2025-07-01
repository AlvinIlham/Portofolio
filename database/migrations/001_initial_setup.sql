-- Create ALBI Projects table
CREATE TABLE albi_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  overview TEXT,
  history TEXT,
  applications TEXT[] DEFAULT '{}',
  current_trends TEXT[] DEFAULT '{}',
  challenges TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ALPHA Projects table
CREATE TABLE alpha_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL,
  technologies TEXT[] DEFAULT '{}',
  overview TEXT,
  history TEXT,
  applications TEXT[] DEFAULT '{}',
  current_trends TEXT[] DEFAULT '{}',
  challenges TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ARC Items table
CREATE TABLE arc_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  category TEXT NOT NULL CHECK (category IN ('certifications', 'research', 'achievements')),
  type TEXT,
  date DATE,
  organization TEXT,
  pdf_url TEXT,
  view_url TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_albi_projects_category ON albi_projects(category);
CREATE INDEX idx_alpha_projects_category ON alpha_projects(category);
CREATE INDEX idx_arc_items_category ON arc_items(category);
CREATE INDEX idx_arc_items_date ON arc_items(date DESC);

-- Create RLS (Row Level Security) policies
ALTER TABLE albi_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE alpha_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE arc_items ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON albi_projects FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON alpha_projects FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON arc_items FOR SELECT USING (true);

-- Allow authenticated users to manage data (admin only)
CREATE POLICY "Allow admin manage" ON albi_projects FOR ALL USING (auth.email() IN ('admin@yourportfolio.com', 'your-email@gmail.com'));
CREATE POLICY "Allow admin manage" ON alpha_projects FOR ALL USING (auth.email() IN ('admin@yourportfolio.com', 'your-email@gmail.com'));
CREATE POLICY "Allow admin manage" ON arc_items FOR ALL USING (auth.email() IN ('admin@yourportfolio.com', 'your-email@gmail.com'));

-- Create storage bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio-images', 'portfolio-images', true);

-- Create storage policies
CREATE POLICY "Allow public read" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-images');
CREATE POLICY "Allow admin upload" ON storage.objects FOR INSERT WITH CHECK (
  bucket_id = 'portfolio-images' AND 
  auth.email() IN ('admin@yourportfolio.com', 'your-email@gmail.com')
);
CREATE POLICY "Allow admin delete" ON storage.objects FOR DELETE USING (
  bucket_id = 'portfolio-images' AND 
  auth.email() IN ('admin@yourportfolio.com', 'your-email@gmail.com')
);

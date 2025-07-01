import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// For client components
export const createSupabaseClient = () => createClientComponentClient();

export type Database = {
  public: {
    Tables: {
      albi_projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image: string;
          category: string;
          technologies: string[];
          overview: string;
          history: string;
          applications: string[];
          current_trends: string[];
          challenges: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image: string;
          category: string;
          technologies: string[];
          overview: string;
          history: string;
          applications: string[];
          current_trends: string[];
          challenges: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image?: string;
          category?: string;
          technologies?: string[];
          overview?: string;
          history?: string;
          applications?: string[];
          current_trends?: string[];
          challenges?: string[];
          updated_at?: string;
        };
      };
      alpha_projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          image: string;
          category: string;
          technologies: string[];
          overview: string;
          history: string;
          applications: string[];
          current_trends: string[];
          challenges: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image: string;
          category: string;
          technologies: string[];
          overview: string;
          history: string;
          applications: string[];
          current_trends: string[];
          challenges: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image?: string;
          category?: string;
          technologies?: string[];
          overview?: string;
          history?: string;
          applications?: string[];
          current_trends?: string[];
          challenges?: string[];
          updated_at?: string;
        };
      };
      arc_items: {
        Row: {
          id: string;
          title: string;
          description: string;
          image: string;
          category: "certifications" | "research" | "achievements";
          type: string;
          date: string;
          organization: string;
          pdf_url?: string;
          view_url?: string;
          metadata: Record<string, unknown>;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          image: string;
          category: "certifications" | "research" | "achievements";
          type: string;
          date: string;
          organization: string;
          pdf_url?: string;
          view_url?: string;
          metadata?: Record<string, unknown>;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          image?: string;
          category?: "certifications" | "research" | "achievements";
          type?: string;
          date?: string;
          organization?: string;
          pdf_url?: string;
          view_url?: string;
          metadata?: Record<string, unknown>;
          updated_at?: string;
        };
      };
    };
  };
};

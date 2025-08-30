import { createClient } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client for server-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for client-side operations with auth helpers
export const createComponentClient = () => {
  return createClientComponentClient();
};
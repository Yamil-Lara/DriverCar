// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xgghsqdrbyqtgghtecqm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnZ2hzcWRyYnlxdGdnaHRlY3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMDAzNzEsImV4cCI6MjA1Njg3NjM3MX0.Yi8RRFoEDddNjZGErGE7TbrQy0B9vjLg4CUBteu-ozM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://muchlcaupervmqgwlspk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11Y2hsY2F1cGVydm1xZ3dsc3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MjE0MzAsImV4cCI6MjA1ODQ5NzQzMH0.lrPuxpU2OFbg8mZPCpdNYrNrkBI8Kog39E821Es8Hrc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

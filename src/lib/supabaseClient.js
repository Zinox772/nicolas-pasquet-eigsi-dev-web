import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izazuwofnoedxpgqvecg.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YXp1d29mbm9lZHhwZ3F2ZWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwOTUzNzgsImV4cCI6MTk4MTY3MTM3OH0.cw7QKQQW4m_9mddsaZcE73mZxL-Ja-1LJMK0xh5oMMQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

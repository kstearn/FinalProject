import { createClient } from '@supabase/supabase-js';


const url = "https://cbhaehbztrkppmeepqyz.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiaGFlaGJ6dHJrcHBtZWVwcXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDE1MjcsImV4cCI6MjAxNDM3NzUyN30.Ri6OWi31HuU_1ZPRHgO9T4i5tRd4QfI9p9Y2Ss0EJLI";

export const supabase = createClient(url, key);
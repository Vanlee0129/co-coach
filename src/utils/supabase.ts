import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ccjwedjrhxfbgtxzydfy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjandlZGpyaHhmYmd0eHp5ZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU1MzE1MzcsImV4cCI6MjA1MTEwNzUzN30.Y4uNXeZwLDHLTxOgrQHx2RLLH-Pq3QXtCOV-5anz9B8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

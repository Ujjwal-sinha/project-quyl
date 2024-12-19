import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://crbgrshmnzmnglqohfpi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyYmdyc2htbnptbmdscW9oZnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2MTg3OTUsImV4cCI6MjA1MDE5NDc5NX0.2azSK7mGWWK6OY6JfoBpBX73DqrRYq7tW5HMIbzdUSA';

export const supabase = createClient(supabaseUrl, supabaseKey);
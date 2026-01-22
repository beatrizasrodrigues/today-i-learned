import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fysjodbvsjxkpyvwplnf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5c2pvZGJ2c2p4a3B5dndwbG5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzODk3ODQsImV4cCI6MjA4Mzk2NTc4NH0.t2_RXRL7o7JBU969hh8AR9oWYTD_VSRfmue9NT-1Kzs'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
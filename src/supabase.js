import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ldoprjdebsydkfhhecrv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxkb3ByamRlYnN5ZGtmaGhlY3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExNzQ1ODUsImV4cCI6MjA5Njc1MDU4NX0.YWavIx5_ZD1WXUrQA8TEVXjp1VBSU3PpCYiEGxXks3Q'
)

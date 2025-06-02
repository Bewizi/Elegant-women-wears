import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gkmhsxlcmjscsuqsgysp.supabase.co'
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbWhzeGxjbWpzY3N1cXNneXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5Mzg4ODksImV4cCI6MjA1NDUxNDg4OX0.j2GHADnDgG1MRasHHtLFMYx4gSYCg94TTav73YsX5aI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'elegant_women_wears',
  },
})

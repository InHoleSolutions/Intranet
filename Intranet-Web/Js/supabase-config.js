// supabase-config.js
const SUPABASE_URL = 'https://yhdpktwvzwkhqvniwqmr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZHBrdHd2endraHF2bml3cW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MDE1MDEsImV4cCI6MjA5NDE3NzUwMX0.QIjoCNFM7YkGxO6lGao7t10gKclohmqgd0JsAGhTFkY';

// Exportamos el cliente para usarlo en cualquier parte del proyecto
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
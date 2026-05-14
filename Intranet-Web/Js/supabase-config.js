// Js/supabase-config.js

// Copia y pega tus llaves aquí directamente (las que tienes en el .env)
const SUPABASE_URL = 'https://bgqlvkvlscujikhzzazf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_mzHMY11jZ7OaMES008LTzA_d7Ya1A2g';

// Usamos el objeto 'supabase' que cargamos desde el CDN en el HTML
export const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
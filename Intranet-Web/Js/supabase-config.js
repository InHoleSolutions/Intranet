// Js/supabase-config.js

// Copia y pega tus llaves aquí directamente (las que tienes en el .env)
const SUPABASE_URL = 'https://bgqlvkvlscujikhzzazf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_S5G17esnd47Gw9hO3rTfbA_cTxVtG-P';

// Usamos el objeto 'supabase' que cargamos desde el CDN en el HTML
export const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
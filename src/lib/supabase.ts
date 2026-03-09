import { createClient } from '@supabase/supabase-js';

// Remplace ces valeurs par tes clés réelles dans ton dashboard Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://votre-projet.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'votre-cle-anonyme';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fonction de sécurité experte : Rafraîchir la session
export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};

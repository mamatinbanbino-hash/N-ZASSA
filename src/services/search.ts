import { supabase } from '@/lib/supabase';

export const searchUser = async (query: string) => {
  if (query.length < 2) return [];

  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, avatar_url, is_verified')
    .ilike('username', `%${query}%`) // Recherche insensible à la casse
    .limit(10);

  if (error) return [];
  return data;
};

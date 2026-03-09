import { supabase } from './supabase';

export const uploadVideo = async (file: File, userId: string) => {
  const fileName = `${userId}/${Math.random()}-${file.name}`;
  
  // 1. Envoi vers le Storage de Supabase
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  // 2. Récupération de l'URL publique
  const { data: { publicUrl } } = supabase.storage
    .from('videos')
    .getPublicUrl(fileName);

  return publicUrl;
};

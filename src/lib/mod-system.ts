import { supabase } from './supabase';

export const moderationService = {
  // Bannir un utilisateur et tous ses comptes liés par Device ID
  async banUser(userId: string, reason: string) {
    // 1. Récupérer le profil pour avoir le Device ID
    const { data: profile } = await supabase
      .from('profiles')
      .select('device_id')
      .eq('id', userId)
      .single();

    if (profile?.device_id) {
      // 2. Bannir TOUS les profils qui utilisent ce Device ID
      const { error } = await supabase
        .from('profiles')
        .update({ 
          status: 'banned',
          ban_reason: reason 
        })
        .eq('device_id', profile.device_id);
      
      return !error;
    }
    return false;
  },

  // Vérifier si la session est valide (Protection Infaillible)
  async checkSecurity(userId: string) {
    const { data } = await supabase
      .from('profiles')
      .select('status')
      .eq('id', userId)
      .single();
    
    if (data?.status === 'banned') {
       // Déconnexion forcée immédiate
       await supabase.auth.signOut();
       window.location.href = "/banned";
    }
  }
};

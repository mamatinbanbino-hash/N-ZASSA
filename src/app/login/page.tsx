'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(''); // Email ou Numéro
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    // Logique OTP : Envoie un lien magique ou un code
    const { error } = await supabase.auth.signInWithOtp({
      email: identifier.includes('@') ? identifier : undefined,
      phone: !identifier.includes('@') ? identifier : undefined,
    });

    if (error) {
      alert("Erreur de sécurité : " + error.message);
    } else {
      router.push('/verify'); // On passe à l'étape du code
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-obsidian">
      <div className="w-full max-w-md p-8 glass rounded-[2.5rem] gold-glow">
        <div className="text-center mb-10">
            <div className="w-20 h-20 bg-nzassa_gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-nzassa_gold/40">
                <i className="fas fa-bolt text-black text-4xl"></i>
            </div>
            <h1 className="text-3xl font-black tracking-tighter italic uppercase">N'ZASSA</h1>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-2">Le monde en un flux</p>
        </div>

        <div className="space-y-6">
          <input 
            type="text" 
            placeholder="Numéro ou Gmail..." 
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-sm outline-none focus:border-nzassa_gold transition"
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-nzassa_gold text-black py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-nzassa_gold/20 active:scale-95 transition"
          >
            {loading ? 'Traitement...' : 'Recevoir mon code'}
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import Feed from '@/components/Feed';
import Navbar from '@/components/Navbar';
import { useAuthStore } from '@/lib/auth-store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { currentSession } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    // SÉCURITÉ : Si pas de compte, redirection vers la connexion
    if (!currentSession) {
      router.push('/login');
    }
  }, [currentSession, router]);

  return (
    <div className="relative h-screen w-full bg-obsidian">
      {/* Flux Vidéo Principal */}
      <Feed />

      {/* Navigation fixe en bas */}
      <Navbar />
      
      {/* Onglets For You / Following en haut */}
      <div className="absolute top-10 left-0 w-full flex justify-center gap-6 z-50">
        <button className="text-white/50 font-black text-sm uppercase tracking-tighter">Abonnements</button>
        <button className="text-white font-black text-sm uppercase tracking-tighter border-b-2 border-nzassa_gold pb-1">Pour Toi</button>
      </div>
    </div>
  );
}

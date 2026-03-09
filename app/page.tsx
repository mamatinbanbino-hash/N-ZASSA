import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* --- BARRE DE NAVIGATION --- */}
      <nav className="border-b border-zinc-800 p-4 flex justify-between items-center sticky top-0 bg-black z-50">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          N'ZASSA
        </h1>
        <div className="space-x-4">
          <Link href="/login" className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-zinc-200 transition">
            Connexion
          </Link>
        </div>
      </nav>

      {/* --- SECTION HÉROS --- */}
      <header className="py-16 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Le réseau de Macassi
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Partage tes talents, tes vidéos et connecte-toi avec toute la communauté.
        </p>
      </header>

      {/* --- GRILLE DE VIDÉOS (Bientôt disponible) --- */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold">Vidéos récentes</h3>
          <span className="text-zinc-500 text-sm">Abidjan, Côte d'Ivoire</span>
        </div>

        {/* C'est ici que les vidéos s'afficheront une fois uploadées */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center group cursor-pointer hover:border-green-500 transition">
              <div className="text-zinc-700 group-hover:text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- BARRE DE NAVIGATION MOBILE --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-zinc-800 p-4 flex justify-around md:hidden">
        <button className="text-zinc-400 hover:text-white">Accueil</button>
        <button className="bg-green-500 p-3 rounded-full -mt-8 shadow-lg shadow-green-500/20 text-black">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <button className="text-zinc-400 hover:text-white">Profil</button>
      </div>
    </div>
  );
}

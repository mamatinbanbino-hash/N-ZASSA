'use client';
import { Gift, Heart, Send } from 'lucide-react';
import { useState } from 'react';

export default function LiveRoom({ params }) {
  const [showGifts, setShowGifts] = useState(false);

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Flux Vidéo du Live */}
      <div className="h-full w-full bg-zinc-900 flex items-center justify-center italic text-zinc-800 font-black">
        LIVE STREAMING...
      </div>

      {/* Overlay de contrôle */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-b from-black/40 via-transparent to-black/60">
        
        {/* Header : Infos Streamer */}
        <div className="flex justify-between items-start pt-8">
          <div className="flex items-center gap-3 glass p-2 pr-4 rounded-full">
            <div className="w-8 h-8 rounded-full bg-nzassa_gold" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-tighter">@Adama_Cyber</p>
              <p className="text-[8px] text-nzassa_gold font-bold">1.2K spectateurs</p>
            </div>
          </div>
          <button className="bg-red-600 text-[10px] px-4 py-2 rounded-full font-black uppercase italic shadow-lg shadow-red-600/20">Quitter</button>
        </div>

        {/* Footer : Chat & Cadeaux */}
        <div className="space-y-4">
          <div className="h-40 overflow-y-auto space-y-2 no-scrollbar mask-fade-top">
            <p className="text-[10px] font-bold"><span className="text-nzassa_gold">LM :</span> Force à toi mon frère ! 🔥</p>
            <p className="text-[10px] font-bold"><span className="text-zinc-400">Hamidou :</span> Cadeau envoyé ! 💎</p>
          </div>

          <div className="flex items-center gap-3">
            <input type="text" placeholder="Commenter..." className="flex-1 glass rounded-2xl p-4 text-xs outline-none" />
            <button onClick={() => setShowGifts(true)} className="w-12 h-12 rounded-full bg-nzassa_gold flex items-center justify-center text-black">
              <Gift className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full glass flex items-center justify-center">
              <Heart className="w-6 h-6 text-red-500 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

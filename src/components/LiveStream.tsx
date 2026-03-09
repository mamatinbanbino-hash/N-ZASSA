import { useState, useEffect } from 'react';
import { Radio, Users, X, Gift } from 'lucide-react';

export default function LiveStream({ userProfile }) {
  const [canLive, setCanLive] = useState(false);

  useEffect(() => {
    // CONDITION DE SÉCURITÉ : 100 abonnés minimum
    if (userProfile.followers_count >= 100) {
      setCanLive(true);
    }
  }, [userProfile]);

  return (
    <div className="h-full bg-black relative flex flex-col items-center justify-center">
      {!canLive ? (
        // État bloqué
        <div className="p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border-2 border-dashed border-zinc-700">
            <Radio className="w-10 h-10 text-zinc-700" />
          </div>
          <h2 className="text-xl font-black uppercase tracking-tighter">Accès Live Restreint</h2>
          <p className="text-xs text-zinc-500 leading-relaxed uppercase font-bold">
            Il te manque <span className="text-nzassa_gold">{100 - userProfile.followers_count}</span> abonnés pour débloquer les Lives sur N'ZASSA.
          </p>
          <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-nzassa_gold h-full transition-all duration-1000" 
              style={{ width: `${userProfile.followers_count}%` }}
            />
          </div>
        </div>
      ) : (
        // État autorisé
        <div className="w-full h-full flex flex-col">
          <div className="absolute top-12 left-6 flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 pr-4 rounded-full border border-white/10">
            <div className="w-8 h-8 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest">En Direct</span>
          </div>
          
          {/* Simulation flux caméra */}
          <div className="flex-1 bg-zinc-900 animate-pulse flex items-center justify-center">
             <p className="text-zinc-700 font-black italic text-4xl opacity-20">CAMERA FEED</p>
          </div>

          <button className="absolute bottom-12 w-[80%] left-1/2 -translate-x-1/2 py-5 bg-red-600 text-white font-black rounded-2xl uppercase text-xs tracking-[0.2em] shadow-xl shadow-red-600/20">
            Lancer la Diffusion
          </button>
        </div>
      )}
    </div>
  );
}

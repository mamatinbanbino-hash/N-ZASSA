import { Video, Image, Type } from 'lucide-react';

export default function CreatePost() {
  return (
    <div className="p-6 space-y-4">
      <h3 className="text-sm font-black uppercase tracking-widest text-nzassa_gold mb-6">Que veux-tu partager ?</h3>
      
      <div className="grid grid-cols-1 gap-3">
        {/* Option Vidéo (TikTok style) */}
        <button className="flex items-center gap-4 p-6 bg-zinc-900 border border-white/5 rounded-[2rem] hover:border-nzassa_gold transition group">
          <div className="w-12 h-12 rounded-2xl bg-nzassa_gold flex items-center justify-center text-black">
            <Video className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-black text-sm uppercase italic">Vidéo / Trend</p>
            <p className="text-[10px] text-zinc-500 uppercase font-bold">Max 10 minutes - Haute Qualité</p>
          </div>
        </button>

        {/* Option Photo / Carrousel */}
        <button className="flex items-center gap-4 p-6 bg-zinc-900 border border-white/5 rounded-[2rem] hover:border-nzassa_gold transition">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
            <Image className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-black text-sm uppercase italic">Photo / Album</p>
            <p className="text-[10px] text-zinc-500 uppercase font-bold">Jusqu'à 10 photos - Filtres N'Zassa</p>
          </div>
        </button>

        {/* Option Statut Texte */}
        <button className="flex items-center gap-4 p-6 bg-zinc-900 border border-white/5 rounded-[2rem] hover:border-nzassa_gold transition">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
            <Type className="w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="font-black text-sm uppercase italic">Statut / Débat</p>
            <p className="text-[10px] text-zinc-500 uppercase font-bold">Parle de tout et de rien</p>
          </div>
        </button>
      </div>
    </div>
  );
}

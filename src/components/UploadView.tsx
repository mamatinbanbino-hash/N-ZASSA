import { useState } from 'react';
import { Music, Film, Lock, Globe } from 'lucide-react';

export default function UploadView() {
  const [category, setCategory] = useState('Divertissement');
  const [isAdult, setIsAdult] = useState(false);

  return (
    <div className="h-full bg-obsidian p-6 pt-12 overflow-y-auto pb-32">
      <h2 className="text-2xl font-black italic mb-8">CRÉER UN POST</h2>

      {/* Zone d'Upload */}
      <div className="w-full aspect-[9/16] bg-zinc-900 border-2 border-dashed border-zinc-800 rounded-[2rem] flex flex-col items-center justify-center gap-4 mb-8 group hover:border-nzassa_gold transition">
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-nzassa_gold">
          <Film className="w-8 h-8" />
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Sélectionner une vidéo</p>
      </div>

      {/* Options de contenu */}
      <div className="space-y-6">
        <div>
          <label className="text-[10px] font-black uppercase text-nzassa_gold tracking-widest ml-2">Catégorie</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 p-4 rounded-2xl mt-1 outline-none text-sm"
          >
            <option>Divertissement</option>
            <option>Sport</option>
            <option>Cyber-Sécurité</option>
            <option>Humour</option>
            <option>Contenu Adulte (+18)</option>
          </select>
        </div>

        {/* Toggle Contenu Adulte Sécurisé */}
        <div className="flex items-center justify-between bg-white/5 p-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-zinc-500" />
            <span className="text-xs font-bold uppercase">Contenu Sensible / Adulte</span>
          </div>
          <input 
            type="checkbox" 
            checked={isAdult} 
            onChange={() => setIsAdult(!isAdult)}
            className="w-5 h-5 accent-nzassa_gold"
          />
        </div>

        <button className="w-full py-5 bg-nzassa_gold text-black font-black rounded-2xl uppercase text-xs tracking-[0.2em] shadow-lg shadow-nzassa_gold/20 active:scale-95 transition">
          Publier sur N'ZASSA
        </button>
      </div>
    </div>
  );
}

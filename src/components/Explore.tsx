export default function Explore() {
  return (
    <div className="p-6 space-y-8">
      {/* Barre de Recherche Expert */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Rechercher un @utilisateur..." 
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 pl-12 text-sm outline-none focus:border-nzassa_gold transition"
        />
        <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"></i>
      </div>

      {/* Synchro Contacts */}
      <div className="bg-gradient-to-r from-nzassa_gold/20 to-transparent p-6 rounded-[2rem] border border-nzassa_gold/10">
        <h4 className="text-[10px] font-black uppercase tracking-widest text-nzassa_gold mb-2">Retrouve tes potes</h4>
        <p className="text-xs text-zinc-400 mb-4">Synchronise tes contacts pour voir qui est déjà sur N'ZASSA.</p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[9px] tracking-widest active:scale-95 transition">
          Synchroniser
        </button>
      </div>

      {/* Tendances */}
      <div>
        <h3 className="text-sm font-black uppercase tracking-tighter mb-4 italic">Tendances Abidjan</h3>
        <div className="space-y-2">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center">
                <span className="text-xs font-bold">#CyberSecCI</span>
                <span className="text-[10px] text-zinc-500 uppercase">12.5K Vidéos</span>
            </div>
        </div>
      </div>
    </div>
  );
}

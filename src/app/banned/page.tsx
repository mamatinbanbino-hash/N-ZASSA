export default function BannedPage() {
  return (
    <div className="h-screen bg-obsidian flex flex-col items-center justify-center p-8 text-center">
      <div className="w-24 h-24 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
        <i className="fas fa-user-slash text-4xl text-red-600"></i>
      </div>
      <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-4">ACCÈS REFUSÉ</h1>
      <p className="text-zinc-500 text-sm leading-relaxed uppercase font-bold">
        Ton compte a été banni pour non-respect des règles de la communauté N'ZASSA. 
        <br/><br/>
        <span className="text-white italic">La sécurité de nos membres est notre priorité.</span>
      </p>
      <button className="mt-12 text-[10px] text-zinc-700 font-black uppercase tracking-widest underline">
        Contacter le Support
      </button>
    </div>
  );
}

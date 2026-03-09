export default function Notifications() {
  const alerts = [
    { type: 'gift', text: 'LM t\'a envoyé un Diamant ! 💎', time: '2m' },
    { type: 'follow', text: 'GD s\'est abonné à ton profil.', time: '1h' },
    { type: 'system', text: 'Félicitations ! Ton compte est désormais certifié.', time: '1j', isGold: true },
  ];

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-black italic uppercase tracking-tighter mb-8">Activités</h2>
      {alerts.map((a, i) => (
        <div key={i} className={`p-5 rounded-[2rem] border flex items-center justify-between ${a.isGold ? 'bg-nzassa_gold/10 border-nzassa_gold/30' : 'bg-white/5 border-white/5'}`}>
          <div className="flex flex-col gap-1">
            <p className={`text-xs font-bold ${a.isGold ? 'text-nzassa_gold' : 'text-white'}`}>{a.text}</p>
            <p className="text-[9px] text-zinc-500 uppercase font-black">{a.time}</p>
          </div>
          <div className={`w-2 h-2 rounded-full ${a.isGold ? 'bg-nzassa_gold shadow-[0_0_10px_#eab308]' : 'bg-zinc-700'}`} />
        </div>
      ))}
    </div>
  );
}

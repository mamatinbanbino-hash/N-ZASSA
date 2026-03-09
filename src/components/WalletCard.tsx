export default function WalletCard({ balance }) {
  const rechargeOptions = [2000, 5000, 10000, 25000];

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-[2.5rem] border border-nzassa_gold/30 gold-glow">
      <p className="text-[10px] text-nzassa_gold font-black uppercase tracking-[0.2em] mb-2">Solde Actuel</p>
      <h2 className="text-4xl font-black mb-8">{balance.toLocaleString()} <span className="text-sm text-zinc-500">CFA</span></h2>
      
      <p className="text-[10px] text-zinc-500 font-bold uppercase mb-4">Recharger par Mobile Money</p>
      <div className="grid grid-cols-2 gap-3">
        {rechargeOptions.map((amount) => (
          <button 
            key={amount}
            className="py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold hover:border-nzassa_gold transition"
          >
            +{amount} CFA
          </button>
        ))}
      </div>
    </div>
  );
}

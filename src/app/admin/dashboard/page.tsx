import { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, TrendingUp, Users } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Utilisateurs Totaux', value: '154.2K', icon: <Users /> },
    { label: 'Revenu Mensuel (CFA)', value: '2.450.000', icon: <TrendingUp className="text-nzassa_gold" /> },
    { label: 'Signalements', value: '12', icon: <ShieldAlert className="text-red-500" /> },
  ];

  return (
    <div className="p-8 bg-obsidian min-h-screen space-y-10 pb-20">
      <h1 className="text-3xl font-black italic tracking-tighter text-nzassa_gold uppercase">Command Center</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-dark_card p-6 rounded-[2rem] border border-white/5 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">{s.label}</p>
              <p className="text-2xl font-black mt-1">{s.value}</p>
            </div>
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Gestion des Utilisateurs */}
      <div className="bg-dark_card rounded-[2.5rem] border border-white/5 overflow-hidden">
        <div className="p-6 border-b border-white/5 bg-white/5">
          <h3 className="font-black text-xs uppercase tracking-widest">Modération & Certifs</h3>
        </div>
        <div className="divide-y divide-white/5">
          {/* Exemple d'utilisateur à gérer */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-800" />
              <div>
                <p className="font-bold text-sm">@Hamidou_EFAK</p>
                <p className="text-[9px] text-zinc-500 uppercase">120 Abonnés</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-nzassa_gold/10 text-nzassa_gold rounded-xl hover:bg-nzassa_gold hover:text-black transition">
                <CheckCircle className="w-5 h-5" />
              </button>
              <button className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition">
                <ShieldAlert className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

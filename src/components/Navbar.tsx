import { Home, Compass, Plus, MessageSquare, User } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-full max-w-md bg-black/90 border-t border-white/5 backdrop-blur-xl px-6 py-3 flex justify-between items-center z-50">
      <Home className="text-white w-6 h-6" />
      <Compass className="text-zinc-500 w-6 h-6" />
      
      {/* Bouton central N'ZASSA */}
      <div className="bg-white rounded-xl p-1 px-3 flex items-center justify-center shadow-lg shadow-white/10 active:scale-90 transition">
        <Plus className="text-black w-6 h-6 stroke-[3px]" />
      </div>

      <MessageSquare className="text-zinc-500 w-6 h-6" />
      <User className="text-zinc-500 w-6 h-6" />
    </div>
  );
}

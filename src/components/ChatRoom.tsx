import { useState, useEffect } from 'react';
import { Send, Image as ImageIcon } from 'lucide-react';

export default function ChatRoom({ contactName }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Salut ! Bien sur N'ZASSA ?", sender: 'them' },
    { id: 2, text: "Ouais, le flux est propre !", sender: 'me' },
  ]);

  return (
    <div className="h-full flex flex-col bg-obsidian">
      {/* Header Chat */}
      <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-black/50 backdrop-blur-xl">
        <div className="w-10 h-10 rounded-full bg-nzassa_gold/20 border border-nzassa_gold/50" />
        <h3 className="font-black text-sm uppercase tracking-widest">{contactName}</h3>
      </div>

      {/* Zone des messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[70%] p-4 rounded-3xl text-sm ${
              m.sender === 'me' 
              ? 'bg-nzassa_gold text-black font-bold rounded-tr-none' 
              : 'bg-zinc-900 text-white rounded-tl-none border border-white/5'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Message */}
      <div className="p-4 bg-black/80 backdrop-blur-xl border-t border-white/5 flex items-center gap-3">
        <button className="text-zinc-500 hover:text-white"><ImageIcon className="w-6 h-6" /></button>
        <input 
          type="text" 
          placeholder="Écris ton message..." 
          className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-sm outline-none focus:border-nzassa_gold"
        />
        <button className="w-12 h-12 bg-nzassa_gold rounded-full flex items-center justify-center text-black">
          <Send className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  );
}

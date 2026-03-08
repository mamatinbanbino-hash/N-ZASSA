import { motion, AnimatePresence } from 'framer-motion';

const GIFTS = [
  { id: 1, name: 'Rose', price: 1, icon: '🌹' },
  { id: 2, name: 'Diamant', price: 50, icon: '💎' },
  { id: 3, name: 'Couronne', price: 500, icon: '👑' },
  { id: 4, name: 'Lion', price: 1000, icon: '🦁' },
];

export default function GiftModal({ isOpen, onClose, onSend }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
          className="fixed bottom-0 w-full max-w-md bg-dark_card border-t border-nzassa_gold/20 rounded-t-[2.5rem] p-6 z-[60]"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-nzassa_gold font-black uppercase text-sm tracking-widest">Envoyer un Cadeau</h2>
            <button onClick={onClose} className="text-zinc-500">Fermer</button>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            {GIFTS.map((gift) => (
              <button 
                key={gift.id} 
                onClick={() => onSend(gift)}
                className="flex flex-col items-center gap-2 p-2 rounded-2xl bg-white/5 hover:bg-nzassa_gold/10 transition"
              >
                <span className="text-3xl">{gift.icon}</span>
                <span className="text-[10px] font-bold text-zinc-400">{gift.price} Coins</span>
              </button>
            ))}
          </div>

          <button className="w-full py-4 bg-nzassa_gold text-black font-black rounded-2xl uppercase text-[10px] tracking-widest shadow-lg shadow-nzassa_gold/20">
            Recharger mes Coins
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

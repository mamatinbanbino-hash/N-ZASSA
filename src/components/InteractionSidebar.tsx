import { Heart, MessageCircle, Share2, Gift } from 'lucide-react';

export default function InteractionSidebar({ video }) {
  return (
    <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center z-20">
      
      {/* Photo de profil + Bouton Follow */}
      <div className="relative mb-2">
        <img src={video.profiles.avatar_url} className="w-12 h-12 rounded-full border-2 border-nzassa_gold object-cover" />
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-nzassa_gold text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          +
        </div>
      </div>

      {/* Bouton Like */}
      <button className="flex flex-col items-center gap-1 group">
        <div className="p-2 rounded-full bg-white/5 backdrop-blur-md group-active:scale-125 transition">
          <Heart className="w-7 h-7 text-white fill-transparent group-active:text-red-500 group-active:fill-red-500" />
        </div>
        <span className="text-[10px] font-bold">{video.likes_count}</span>
      </button>

      {/* Bouton Cadeaux (Gift) */}
      <button className="flex flex-col items-center gap-1" onClick={() => alert('Ouvrir le menu des cadeaux')}>
        <div className="p-2 rounded-full bg-white/5 backdrop-blur-md text-nzassa_gold shadow-lg shadow-nzassa_gold/10">
          <Gift className="w-7 h-7" />
        </div>
        <span className="text-[10px] font-bold">Cadeaux</span>
      </button>

      {/* Commentaires */}
      <button className="flex flex-col items-center gap-1">
        <div className="p-2 rounded-full bg-white/5 backdrop-blur-md">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        <span className="text-[10px] font-bold">42</span>
      </button>

      {/* Partager */}
      <button className="flex flex-col items-center gap-1">
        <div className="p-2 rounded-full bg-white/5 backdrop-blur-md">
          <Share2 className="w-7 h-7 text-white" />
        </div>
        <span className="text-[10px] font-bold">Partage</span>
      </button>

    </div>
  );
}

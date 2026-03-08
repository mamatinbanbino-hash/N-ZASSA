import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import InteractionSidebar from './InteractionSidebar';

export default function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative h-screen w-full bg-black group" onClick={handlePress}>
      {/* La Vidéo */}
      <video
        ref={videoRef}
        loop
        className="h-full w-full object-cover"
        src={video.video_url}
      />

      {/* Infos en bas à gauche */}
      <div className="absolute bottom-20 left-4 z-10 space-y-2 max-w-[80%]">
        <h3 className="font-black text-nzassa_gold text-lg tracking-tighter">
          @{video.profiles.username}
        </h3>
        <p className="text-sm text-white/90 line-clamp-2">{video.caption}</p>
        <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-nzassa_gold text-black text-[9px] font-black uppercase rounded">
                {video.category}
            </span>
        </div>
      </div>

      {/* Sidebar d'interaction (Like, Cadeaux, Partage) */}
      <InteractionSidebar video={video} />
      
      {/* Disque qui tourne (Musique) */}
      <div className="absolute bottom-20 right-4 animate-spin-slow">
         <div className="w-10 h-10 rounded-full border-4 border-zinc-800 bg-gradient-to-tr from-zinc-900 to-black p-2">
            <div className="w-full h-full bg-nzassa_gold rounded-full" />
         </div>
      </div>
    </div>
  );
}

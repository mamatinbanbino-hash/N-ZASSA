import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { supabase } from '@/lib/supabase';

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // On récupère les vidéos de toutes les catégories (Sport, Adulte, etc.)
    const fetchVideos = async () => {
      const { data } = await supabase
        .from('videos')
        .select('*, profiles(username, avatar_url)')
        .order('created_at', { ascending: false });
      setVideos(data || []);
    };
    fetchVideos();
  }, []);

  return (
    <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {videos.map((video) => (
        <div key={video.id} className="h-full w-full snap-start snap-always">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
}

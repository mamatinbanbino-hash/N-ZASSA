export const getOptimizedVideo = (url: string) => {
  // Si c'est une URL Cloudinary, on force le format automatique et la qualité automatique
  if (url.includes('cloudinary.com')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  return url;
};

export const generateThumbnail = (videoUrl: string) => {
    // Génère une image de prévisualisation à la seconde 1
    return videoUrl.replace('.mp4', '.jpg').replace('/upload/', '/upload/so_1/');
};

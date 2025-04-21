
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByAlbumId } from '../api/users';
import PhotoCard from '../components/PhotoCard';
import Footer from '../components/Footer';

type Photo = {
  id: number;
  thumbnailUrl: string;
  title: string;
};

const Photos = () => {
  const [searchParams] = useSearchParams();
  const albumId = searchParams.get('albumId');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (albumId) {
      getPhotosByAlbumId(albumId).then(setPhotos);
    }
  }, [albumId]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <main className="flex-grow max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Photos</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded shadow"
        >
          ← Back
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;

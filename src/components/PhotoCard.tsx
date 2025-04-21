// src/components/PhotoCard.tsx
type Photo = {
  id: number;
  thumbnailUrl: string;
  title: string;
};

const PhotoCard = ({ photo }: { photo: Photo }) => {
  return (
    <div className="text-center bg-white p-3 rounded shadow">
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="rounded mx-auto mb-2"
      />
      <p className="text-sm text-gray-700">{photo.title}</p>
    </div>
  );
};

export default PhotoCard;

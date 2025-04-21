// src/components/PostCard.tsx
type Post = {
  id: number;
  title: string;
  body: string;
};

const PostCard = ({ post }: { post: { title: string; body: string } }) => {
  return (
    <div className="mb-4 p-4 rounded shadow bg-white hover:shadow-md transition">
      <h2 className="text-lg font-bold text-red-600 mb-1">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostCard;

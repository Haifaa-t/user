
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsByUserId } from '../api/users';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';

type Post = {
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId) {
      getPostsByUserId(userId).then(setPosts);
    }
  }, [userId]);

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <main className="flex-grow max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Posts</h1>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
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

export default Posts;



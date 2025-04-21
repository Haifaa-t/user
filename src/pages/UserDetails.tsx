// src/pages/UserDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById, getUserPosts, getUserAlbums, getUserTodos } from '../api/users';
import UserDetailInfo from '../components/UserDetailInfo';
import Footer from '../components/Footer';
import { CheckCircle, XCircle } from 'lucide-react';

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (userId) {
      getUserById(userId).then(setUser);
      getUserPosts(userId).then(setPosts);
      getUserAlbums(userId).then(setAlbums);
      getUserTodos(userId).then(setTodos);
    }
  }, [userId]);

  if (!user) return <div className="p-6">Loading user...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-red-600 mb-4">{user.name}'s Profile</h1>

      <div className="space-y-2 mb-6">
        <UserDetailInfo label="Email" value={user.email} />
        <UserDetailInfo label="Phone" value={user.phone} />
        <UserDetailInfo label="Company" value={user.company.name} />
        <UserDetailInfo label="Website" value={user.website} />
        <UserDetailInfo label="Address" value={user.address.street} />
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Posts</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <Link
          to={`/posts?userId=${userId}`}
          className="text-blue-600 hover:underline block mt-2"
        >
          View all posts
        </Link>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Albums</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {albums.map((album: any) => (
            <li key={album.id}>
              {album.title}
              <Link
                to={`/photos?albumId=${album.id}&userId=${userId}`}
                className="text-blue-600 hover:underline ml-2"
              >
                View Photos
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Todos</h2>
        <ul className="space-y-2 text-gray-700">
          {todos.map((todo: any) => (
            <li key={todo.id} className="flex items-center gap-2">
              {todo.completed ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600" />
              )}
              <span>{todo.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default UserDetails;


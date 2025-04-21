import { UsersIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f7f7f7] text-center px-6">
      <div className="bg-white shadow-lg p-10 rounded-lg max-w-xl w-full border-t-8 border-[#d90f1c]">
        <h1 className="text-4xl font-bold text-[#d90f1c] mb-4">Welcome to the System</h1>
        <p className="text-lg text-gray-700 mb-6">
          Explore users and their posts, albums, and todos.
        </p>
        <a
          href="/users"
          className="inline-flex items-center gap-2 bg-[#ffcb05] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded shadow transition"
        >
          <UsersIcon className="w-5 h-5" />
          View Users
        </a>
      </div>
    </div>
  );
};

export default Home;


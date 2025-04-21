// src/components/UserCard.tsx
import { Link } from 'react-router-dom';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
  };
  company: {
    name: string;
  };
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white border-l-4 border-yellow-400 p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
      <Link
        to={`/users/${user.id}`}
        className="text-red-600 font-bold text-xl hover:underline block mb-2"
      >
        {user.name}
      </Link>
      <p className="text-gray-700">
        <strong className="text-gray-900">Email:</strong> {user.email}
      </p>
      <p className="text-gray-700">
        <strong className="text-gray-900">Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-700">
        <strong className="text-gray-900">Street:</strong> {user.address.street}
      </p>
      <p className="text-gray-700">
        <strong className="text-gray-900">Company:</strong> {user.company.name}
      </p>
    </div>
  );
};

export default UserCard;

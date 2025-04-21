import { useEffect, useState } from 'react';
import { getUsers } from '../api/users';
import UserCard from '../components/UserCard';

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

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col gap-6">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;




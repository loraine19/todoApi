"use client"
import { useEffect, useState } from 'react';

interface user {
  id: number;
  userName: string;
}

export default function Home() {
  const [users, setUsers] = useState<user[]>([]);


  // Function to fetch all Users
  const fetchUsers = () => {
    fetch('/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch Users');
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  };

  // Fetch Users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 p-8">user List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User Name</th>
            {/* Remove Actions header */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="p-8 border-b">{user.userName}</td>
              {/* Remove Actions column */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Remove Add New user section */}
    </div>
  );
}
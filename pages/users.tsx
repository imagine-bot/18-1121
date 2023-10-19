// ./pages/users.tsx
import UserTable from '../components/UserTable';

const users = [
  { name: 'John Doe', address: '123 Main St', phone: '555-555-5555' },
  { name: 'Jane Doe', address: '456 Elm St', phone: '555-555-5556' },
  // Add more users as needed
];

const UsersPage = () => (
  <div className="flex items-center justify-center h-screen">
    <h1>Users</h1>
    <UserTable users={users} />
  </div>
);

export default UsersPage;
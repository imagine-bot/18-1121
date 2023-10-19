// ./components/UserTable.tsx
import React from 'react';

type User = {
  name: string;
  address: string;
  phone: string;
};

type UserTableProps = {
  users: User[];
};

const UserTable: React.FC<UserTableProps> = ({ users }) => (
  <div className="card border hover:border-blue-500">
    <table className="table-auto mx-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
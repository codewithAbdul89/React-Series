import { useState } from "react";
import {
  useGetUsersQuery,
  useDeleteUsersMutation,
  useUpdateUsersMutation,
} from "../Services/APISllice";

export default function UserList() {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUsersMutation();
  const [updateUser] = useUpdateUsersMutation();

  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  if (isLoading) return <p>Loading...</p>;

  const startEdit = (user) => {
    setEditingId(user.id);
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };

  const saveUpdate = async () => {
    try {
      await updateUser({ id: editingId, ...form }).unwrap();
    } catch {}
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
    } catch {}
    setEditingId(null);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4 text-center">
        User Management
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found</p>
      ) : (
        <table className="w-full border rounded shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Role</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center border-t">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2 flex justify-center gap-2">
                  <button
                    onClick={() => startEdit(user)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-5 rounded w-96">
            <h3 className="text-lg font-bold mb-3">Update User</h3>

            <input
              className="border p-2 w-full mb-2"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="border p-2 w-full mb-2"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="border p-2 w-full mb-4"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            />

            <div className="flex justify-between">
              <button
                onClick={saveUpdate}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

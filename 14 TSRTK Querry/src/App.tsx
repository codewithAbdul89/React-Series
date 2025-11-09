import React from 'react';
import { useUsersQuery, useUserQuery, useAddUserMutation, useDeleteUserMutation, useUpdateUserMutation } from './services/userApi';


const App: React.FC = () => {
  const {
    data: users,
    error: usersError,
    isFetching: usersFetching,
    isLoading: usersLoading,
    isSuccess: usersSuccess,
  } = useUsersQuery();



  return (
    <div className="p-4">
      <h1 className="text-4xl mb-4">RTK Tutorial</h1>

      {/* Users Section */}
      {usersLoading && <h2 className="text-2xl">Loading Users...</h2>}
      {usersFetching && <h2 className="text-2xl">Fetching Users...</h2>}
      {usersError && <h2 className="text-2xl">Error loading users</h2>}

      {usersSuccess && (
        <div>
          <h2 className="text-3xl mt-4">Users</h2>
          {users?.map((user) => (
            <div key={user.id}>
              {user.id} - {user.name}
              <span><UserDetail id={user.id} /></span>
            </div>
          ))}
        </div>
      )}


      <div><AddUser /></div>
      
    </div>
  );
};

export default App;



export const UserDetail = ({ id }: { id: string }) => {
  const { data } = useUserQuery(id)
  return (
    <pre>{JSON.stringify(data, undefined, 3)}</pre>
  )
}


export const AddUser = () => {
  const [addUser] = useAddUserMutation()
  const [updateUser] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  const contact = {
    "id": "6",
    "name": "Haris",
    "class": "02",
    "email": "haris@gmail.com"
  }
  const updatedContact = {
    "id": "6",
    "name": "Haris update",
    "class": "02 update",
    "email": "haris@gmail.com   update"
  }
  const addHandler = async () => {
    await addUser(contact).unwrap();
  }
  const deleteHandler = async () => {
    await deleteUser(contact.id).unwrap();
  }
  const updateHandler = async () => {
    await updateUser(updatedContact).unwrap();
  }
  return (
    < >
      <div className='flex gap-x-9 bg-red-500 text-white w-fit p-3 rounded-lg mt-10'>
        <button onClick={addHandler}>Add User</button>
        <button onClick={deleteHandler}> Delete</button>
        <button onClick={updateHandler}>Update </button>

      </div>


    </>
  )

}
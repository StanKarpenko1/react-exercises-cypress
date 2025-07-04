
import userService, { IUser } from "../../services/user-service";
import useUsers from "../../hooks/useUsers";


const UsersList = () => {

  const { users, error, isLoading, setUsers, setError} = useUsers();

  const deleteUser = (user: IUser) => {
    const originalUsers = [...users];
    
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id)
        .catch((err) => {
            setError(err.message);
            setUsers(originalUsers);     
        });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Stan" };
    const originalUsers = [...users];

    setUsers([newUser, ...users]);

   userService.create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = ( user : IUser ) => {

    const updatedUser = { ...user, name: (user.name).toUpperCase()  }
    
    const originalUsers = [...users];

    setUsers(users.map(u => u.id === user.id ? updatedUser : u));

    userService.update(updatedUser)
        .catch((err) => {
            setError(err.message);
            setUsers(originalUsers);
          }); 
  }

  return (
    <>
      <p> Users List Page</p>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button 
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
               
               >Update</button>

              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;

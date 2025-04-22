import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface IUser {
    id: number,
    name: string
}

const UsersList = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

        const controller = new AbortController();

        axios   
            .get<IUser[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
            .then((res) => {
                setUsers(res.data)
                setLoading(false)
            })
            .catch((err) =>  {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            });


        return () => controller.abort();
    }, []);

  return (
    <>
        <p> Users List Page</p>
        {isLoading && <div className="spinner-border"></div>}
        {error && <p className="text-danger">{error}</p>}
        <ul>
            {users.map(user => <li key={user.id}> { user.name} </li>)}
        </ul>
    </>
  )
}

export default UsersList
import { useEffect, useState } from "react";
import userService, { IUser } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
  
      const { request, cancel } = userService.getAll<IUser>();
  
        request.then((res) => { 
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => cancel();
    }, []);
    return {users, error, isLoading, setUsers, setError } 
}

export default useUsers;
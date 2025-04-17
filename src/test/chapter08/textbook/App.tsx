import axios from "axios";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListnItem";
import { User } from "./types/user";

const App1 = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>("../Example.json").then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <ListItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        />
      ))}
    </div>
  );
};

export default App1;

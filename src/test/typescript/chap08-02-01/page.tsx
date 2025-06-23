import { useEffect, useState } from "react";
import { data } from "react-router-dom";

type User = {
  id: number;
  name: string;
  age: number;
};
const Page080201 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUser();
  });
  const getUser = async () => {
    const fetchUsers = await fetch("Test.json");
    const data: User[] = await fetchUsers.json();
    setUsers(data);
  };

  if (data === undefined) {
    <p>...Loading</p>;
  }
  return (
    <div>
      {users.map((info, index) => (
        <p key={index}>
          ID:{info.id} Name:{info.name} Age:{info.age}
        </p>
      ))}
    </div>
  );
};

export default Page080201;

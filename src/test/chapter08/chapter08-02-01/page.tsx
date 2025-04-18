import { useEffect, useState } from "react";
import type { User } from "./types/user";

const Api1 = () => {
  const [users, setUsers] = useState<User[]>([]);
  // useEffect(()=>{
  //     const getData=async()=>{
  //         const personalData=await fetch("../Test.json");
  //         const data:
  //     }
  // })

  return (
    <div>
      <h1>User Info</h1>
    </div>
  );
};

export default Api1;

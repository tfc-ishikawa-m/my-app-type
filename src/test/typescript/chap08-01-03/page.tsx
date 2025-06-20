import React, { useState } from "react";

const Page0103 = () => {
  const [text, setText] = useState<string>("");
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeText}></input>
      <p>Input:{text}</p>
    </div>
  );
};

export default Page0103;

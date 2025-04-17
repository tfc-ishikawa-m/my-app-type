import React, { useState } from "react";

const Type080103 = () => {
  const [text, setText] = useState<string>("");
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <input type="text" onChange={onChangeText} />
      <p>Input:{text}</p>
    </div>
  );
};

export default Type080103;

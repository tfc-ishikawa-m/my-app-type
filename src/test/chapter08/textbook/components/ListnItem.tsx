import type { FC } from "react";
import type { User } from "../types/user";

export const ListItem: FC<User> = (props: User) => {
  const { id, name, age, personalColor = "grey" } = props;
  return (
    <div>
      <p style={{ color: personalColor }} />
      {id}:{name}({age})
    </div>
  );
};

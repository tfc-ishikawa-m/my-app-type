import type { User } from "../types/user";

export const ListItem = (props: User) => {
  const { id, name, age, personalColor, hobbies } = props;
  return (
    <div>
      <p style={{ color: personalColor }}>
        {id}:{name}({age}){hobbies?.join("/")}
      </p>
    </div>
  );
};

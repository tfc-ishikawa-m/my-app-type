type User = {
  name: string;
  age: number;
};
const Child = ({ name, age }: User) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
};

export default Child;

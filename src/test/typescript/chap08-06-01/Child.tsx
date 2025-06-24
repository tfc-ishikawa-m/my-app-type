type User = {
  name: string;
  age?: number | "Not provided";
};
const Child = ({ name, age = "Not provided" }: User) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
    </div>
  );
};

export default Child;

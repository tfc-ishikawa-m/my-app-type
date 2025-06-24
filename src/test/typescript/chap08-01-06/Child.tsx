type FruitsList<T extends string> = {
  fruit: T[];
};
const Child = <T extends string>({ fruit }: FruitsList<T>) => {
  return (
    <div>
      <ul>
        {fruit.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

type FruitsList = {
  fruit: [string, string, string];
};
const Child = ({ fruit }: FruitsList) => {
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

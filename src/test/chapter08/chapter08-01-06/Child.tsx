type FruitsList = {
  fruits: [string, string, string];
};
const Child = ({ fruits }: FruitsList) => {
  return (
    <div>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </div>
  );
};

export default Child;

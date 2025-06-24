type fruitsList = { fruits: string[] };
const Child = ({ fruits }: fruitsList) => {
  return (
    <div>
      <ul>
        {fruits.map((value: string, index: number) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Child;

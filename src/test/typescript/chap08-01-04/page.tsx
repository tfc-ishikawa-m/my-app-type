const Page0104 = () => {
  const calcNum = (numA: number, numB: number) => {
    return numA + numB;
  };
  return (
    <div>
      <p>合計値:{calcNum(1, 10)}</p>
    </div>
  );
};

export default Page0104;

import Child from "./Child";

const Page0602 = () => {
  const labelText = "color Style";
  const styleInf1 = {
    color: "white",
    padding: "10px",
    width: "100px",
    backgroundColor: "red",
  };
  const styleInf2 = {
    color: "white",
    padding: "10px",
    width: "100px",
  };
  return (
    <div>
      <Child style={styleInf1} label={labelText} />
      <Child style={styleInf2} label={labelText} />
    </div>
  );
};

export default Page0602;

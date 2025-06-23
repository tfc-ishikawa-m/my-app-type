import Child from "./Child";

type FontSize = { size: "small" | "medium" | "large" };
const Page0105 = () => {
  const font: FontSize = { size: "large" };
  return (
    <div>
      <Child size={font.size} />
    </div>
  );
};

export default Page0105;

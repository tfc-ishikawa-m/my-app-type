type FontSize = { size: "small" | "medium" | "large" };
const Child = ({ size }: FontSize) => {
  return (
    <div>
      <p style={{ fontSize: size }}>BoxComponent</p>
    </div>
  );
};

export default Child;

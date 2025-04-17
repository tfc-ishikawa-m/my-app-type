type Size = {
  size: string;
};
const Child = (props: Size) => {
  const { size } = props;

  return (
    <div>
      <p style={{ fontSize: size }}>BoxComponent</p>
    </div>
  );
};

export default Child;

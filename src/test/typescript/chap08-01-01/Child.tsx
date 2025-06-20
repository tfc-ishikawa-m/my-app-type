interface User {
  name: string;
}

const Child = (props: User) => {
  const { name } = props;
  return <div>Hello,{name}</div>;
};

export default Child;

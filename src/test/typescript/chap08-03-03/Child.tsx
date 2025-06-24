type Text = {
  btnName: string;
  alertText: string;
};
const Child = ({ btnName, alertText }: Text) => {
  return (
    <div>
      <button onClick={() => alert(alertText)}>{btnName}</button>
    </div>
  );
};

export default Child;

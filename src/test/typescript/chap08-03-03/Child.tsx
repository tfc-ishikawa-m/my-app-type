type Text = {
  btnName: string;
  alertText: string;
  onClickButton: (alertText: string) => void;
};
const Child = ({ btnName, alertText, onClickButton }: Text) => {
  return (
    <div>
      <button onClick={() => onClickButton(alertText)}>{btnName}</button>
    </div>
  );
};

export default Child;

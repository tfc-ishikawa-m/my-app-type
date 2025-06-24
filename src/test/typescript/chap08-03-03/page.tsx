import Child from "./Child";

type Text = {
  btnName: string;
  alertText: string;
};
const Page0303 = () => {
  const showText: Text = {
    btnName: "おしてね～",
    alertText: "アラートだよ～",
  };
  return (
    <div>
      <Child btnName={showText.btnName} alertText={showText.alertText} />
    </div>
  );
};

export default Page0303;

import Child from "./Child";

const Page0303 = () => {
  const showText = {
    btnName: "おしてね～",
    alertText: "アラートだよ～",
  };
  const onClickButton = (alertText: string): void => {
    alert(alertText);
  };
  return (
    <div>
      <Child
        btnName={showText.btnName}
        alertText={showText.alertText}
        onClickButton={onClickButton}
      />
    </div>
  );
};

export default Page0303;

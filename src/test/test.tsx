//基本的な型 stringで指定
let str: string = "A";
str = "10";
// str=10;

//numberで指定
let num: number = 0;
num = 1;
// num="ddd";

//boolean型で指定
let bool: boolean = true;
bool = false;
// bool=10;

//Array型で指定
const arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];
arr1.push(10);
arr2.push(10);
// arr1.push("10");
// arr2 = 10;

//nullで指定
let null1: null = null;
null1 = null1;
// null1 = 10;

//undefinedで指定
let undefined1: undefined = undefined;
undefined1 = undefined;
// undefined1 = 10;

//any型
let any1: any;
any1 = false;
any1 = 10;
any1 = undefined;

//void型
const funcA = (num: number): void => {
  console.log(num);
};
funcA(10);
// funcA("10");
// funcA();

//オブジェクト型
//*{:型名,:型名...}で指定
const obj: { str: string; num: number } = {
  str: "A",
  num: 20,
};
obj.str = "B";
obj.num = 20;
// obj.str=10;
// obj.num=null1;
// obj=10;

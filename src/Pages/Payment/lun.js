export const algorithmLun = (value) => {
  // const odd1 = Number(value.substr(0, 1));
  // const odd3 = Number(value.substr(2, 1));
  // const odd5 = Number(value.substr(4, 1));
  // const odd7 = Number(value.substr(6, 1));
  // const odd9 = Number(value.substr(8, 1));
  // const odd11 = Number(value.substr(10, 1));
  // const odd13 = Number(value.substr(12, 1));
  // const odd15 = Number(value.substr(14, 1));

  const arrAll = [];
  const arrOdd = [];
  const arr = [];
  const stroka = value.split("");
  //   arrAll.push(stroka);

  //   arrAll.push(value.split(""));
  //   arr.push(arrAll);

  console.log("stroka " + stroka);
  console.log("stroka l " + stroka.length);

  for (let i = 0; i < stroka.length; i++) {
    console.log("i = " + i);
    arrAll.push(i);
    console.log(arrAll[0]);
    console.log(arrAll[2]);
  }

  //   console.log("str= " + stroka);
  //   console.log("ar = " + arrAll);
  //   console.log("odd = " + arrOdd);
  //   console.log("at= " + arrAll.at(2));
  //   console.log("[]= " + arrAll[2]);
};

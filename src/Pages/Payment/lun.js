export const algorithmLun = (value) => {
  const arrAll = [];
  const arrOdd = [];
  const stroka = value.split("");
  let evenSumm = 0;
  let oddSumm = 0;

  for (let i = 0; i < stroka.length; i++) {
    if (stroka[i] != " ") {
      arrAll.push(stroka[i]);
    }
  }

  for (let es = 0; es < arrAll.length; es++) {
    if (es % 2 !== 0) {
      evenSumm += Number(arrAll[es]);
    }
  }

  for (let j = 0; j < arrAll.length; j++) {
    if (j % 2 == 0) {
      continue;
    }
    arrOdd.push(arrAll[j - 1] * 2);
  }

  for (let k = 0; k < arrOdd.length; k++) {
    if (arrOdd[k] >= 10) {
      let temp2 = arrOdd[k].toString();
      let temp3 = temp2.split("", 2);
      let temp4 = Number(temp3[0]) + Number(temp3[1]);
      arrOdd[k] = temp4;
    }
    oddSumm += arrOdd[k];
  }
  oddSumm = oddSumm / 2;
  const lun = oddSumm + evenSumm;

  ///?????????
  if (lun % 10 !== 0) return "true";
  else return "Проверьте правильность ввода номера карты";

  console.log(lun);

  //   console.log("[all]= " + arrAll);
  //   console.log("[odd]= " + arrOdd);
  //   console.log("oddSumm = " + oddSumm);
  //   console.log("event summ arr= " + evenSumm);
};

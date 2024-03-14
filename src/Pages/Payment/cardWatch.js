export const calculateCardType = (value) => {
  const firstNumber = Number(value.substr(0, 1));
  switch (firstNumber) {
    case 1:
    case 2:
      return "Avia";
    case 3:
      return "American Express";
    case 4:
      return "Visa";
    default:
      return "";
  }
};

// export const calculateCardType = (value) => {
//   if (Number(value.substr(1, 1)) === 1 || Number(value.substr(1, 1)) === 2)
//     return "Avia";

//   return "";
// };

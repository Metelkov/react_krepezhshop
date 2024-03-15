export const calculateCardType = (value) => {
  const firstNumber = Number(value.substr(0, 1));
  switch (firstNumber) {
    case 1:
      return "Avia";
    case 2:
      return "MIR";
    case 3:
      return "American Express";
    case 4:
      return "Visa";
    case 5:
      return "MasterCard";
    case 6:
      return "Maestro";
    case 7:
      return "Petrolium";
    case 8:
      return "Telecom";
    case 9:
      return "Govement";
    default:
      return "";
  }
};

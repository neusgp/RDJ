import { PROVISIONAL } from "./constants";

export const getProvisionalId = () => {
  const number1 = Math.random();
  const number2 = Math.random();
  return `${PROVISIONAL}-${number1}${number2}`;
};

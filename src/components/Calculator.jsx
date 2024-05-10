import React from "react";

export const Calculator = (props) => {
  const { x, y, operation } = props;
  let res;

  switch (operation) {
    case "+":
      res = x + y;
      break;
    case "-":
      res = x - y;
      break;
    case "*":
      res = x * y;
      break;
    case "/":
      res = x / y;
      break;
    case "^":
      res = Math.pow(x, y);
      break;
    default:
      res = 0;
  }

  return <div>Result: {res}</div>;
};

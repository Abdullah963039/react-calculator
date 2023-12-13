/**
 *
 * @param {object} state
 * @returns {number}
 */
export function equalance(state) {
  const { previousOperand, currentOperand, operation } = state;

  if (previousOperand === "" || currentOperand === "") return "";

  let [p, c] = [parseFloat(previousOperand), parseFloat(currentOperand)];

  switch (operation) {
    case "+":
      return p + c;

    case "-":
      return p - c;

    case "*":
      return p * c;

    case "÷":
      return p / c;

    default:
      return state;
  }
}

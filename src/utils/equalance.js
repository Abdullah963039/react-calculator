/**
 *
 * @param {object} state
 * @returns {number}
 */
export function equalance(state) {
  const { previousOperand, currentOperand, operation } = state;

  if (previousOperand === "" || currentOperand === "") return "";

  let [prev, curr] = [parseFloat(previousOperand), parseFloat(currentOperand)];

  switch (operation) {
    case "+":
      return prev + curr;

    case "-":
      return prev - curr;

    case "*":
      return prev * curr;

    case "÷":
      return prev / curr;

    default:
      return state;
  }
}

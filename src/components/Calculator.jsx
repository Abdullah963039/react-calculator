import React from "react";

import { Button } from "./Button";
import { Digit } from "./Digit";
import { Operation } from "./Operation";
import { equalance } from "../utils/equalance";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  DELETE_DIGIT: "delete-digit",
  ADD_OPERATION: "add-operation",
  EQUAL: "equal",
  CLEAR: "clear",
};

const INITIAL_STATE = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // If period is the first press
      if (state.currentOperand == "" && payload.digit === ".") {
        return {
          ...state,
          currentOperand: "0" + payload.digit,
        };
      }

      // If period is already been exist
      if (state.currentOperand.includes(".") && payload.digit === ".")
        return state;

      if (state.currentOperand === "0" && payload.digit === 0) {
        return state;
      }

      return {
        ...state,
        currentOperand: state.currentOperand + payload.digit,
      };
    case ACTIONS.DELETE_DIGIT:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.ADD_OPERATION:
      if (state.currentOperand == "" && state.previousOperand == "")
        return state;

      if (state.currentOperand !== "" && state.previousOperand !== "") {
        return {
          previousOperand: equalance(state) + "",
          currentOperand: "",
          operation: payload.operation,
        };
      }

      if (state.currentOperand !== "" && state.previousOperand === "") {
        return {
          previousOperand: state.currentOperand,
          currentOperand: "",
          operation: payload.operation,
        };
      }

      if (state.currentOperand === "" && state.previousOperand !== "") {
        return {
          ...state,
          operation: payload.operation,
        };
      }
    case ACTIONS.EQUAL:
      if (state.currentOperand === "" || state.previousOperand === "")
        return state;

      return {
        previousOperand: "",
        operation: "",
        currentOperand: equalance(state) + "",
      };

    case ACTIONS.CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
}

export default function Calculator() {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const handlePressEnter = (e) => {
    if (e.key === "Backspace") {
      dispatch({ type: ACTIONS.DELETE_DIGIT });
    }
    if (e.key === "Backspace" && e.ctrlKey) {
      dispatch({ type: ACTIONS.CLEAR });
    }
    if (e.key === "Enter") {
      dispatch({ type: ACTIONS.EQUAL });
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handlePressEnter);

    return () => document.removeEventListener("keydown", handlePressEnter);
  }, []);

  return (
    <>
      <div className="flex flex-col divide-y-4 dark:divide-slate-500 max-w-xl bg-white rounded-lg overflow-hidden shadow w-full xs:w-4/5">
        {/* Operands Wrapper */}
        <div className="text-end flex flex-col gap-2 dark:bg-slate-600 p-2  min-h-[80px]">
          {/* Previuos Operand */}
          <div className="text-sm text-slate-600 dark:text-slate-400 text-end flex-1">
            {state.previousOperand} {state.operation}
          </div>
          {/* Current Operand */}
          <div className="text-lg break-words dark:text-slate-300 flex-1 grow">
            {state.currentOperand}
          </div>
        </div>
        {/* Calculator Wrapper */}
        <div className="w-full grid grid-cols-4 gap-4 bg-white dark:bg-slate-600 p-4">
          <Button
            className="col-span-2 text-white bg-red-500 hover:bg-red-500/90 dark:bg-red-700 dark:hover:bg-red-600/80 focus-visible:ring-red-500 dark:focus-visible:ring-red-700"
            colSpan="2"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            title="Ctrl + ←"
          >
            AC
          </Button>
          <Button
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
            title="←"
          >
            DEL
          </Button>
          <Operation dispatch={dispatch} operation="÷" />
          <Digit digit={1} dispatch={dispatch} />
          <Digit digit={2} dispatch={dispatch} />
          <Digit digit={3} dispatch={dispatch} />
          <Operation dispatch={dispatch} operation="-" />
          <Digit digit={4} dispatch={dispatch} />
          <Digit digit={5} dispatch={dispatch} />
          <Digit digit={6} dispatch={dispatch} />
          <Operation dispatch={dispatch} operation="+" />
          <Digit digit={7} dispatch={dispatch} />
          <Digit digit={8} dispatch={dispatch} />
          <Digit digit={9} dispatch={dispatch} />
          <Operation dispatch={dispatch} operation="*" />
          <Digit digit={"."} dispatch={dispatch} />
          <Digit digit={0} dispatch={dispatch} />
          <Button
            onClick={() => dispatch({ type: ACTIONS.EQUAL })}
            className="col-span-2 bg-emerald-500 hover:bg-emerald-500/90 dark:bg-emerald-600 dark:hover:bg-emerald-600/80 text-white focus-visible:ring-emerald-600 dark:focus-visible:ring-emerald-500"
          >
            =
          </Button>
        </div>
      </div>
    </>
  );
}

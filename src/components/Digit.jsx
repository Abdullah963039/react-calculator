import { useEffect } from "react";

import { ACTIONS } from "./Calculator";
import { Button } from "./Button";

export const Digit = ({ digit, dispatch }) => {
  function handleAddDigit() {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  }

  const handleKeydown = (e) => {
    if (e.key === digit.toString()) {
      handleAddDigit();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return <Button onClick={handleAddDigit}>{digit}</Button>;
};

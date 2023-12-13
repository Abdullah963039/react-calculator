import { useEffect } from "react";

import { ACTIONS } from "./Calculator";
import { Button } from "./Button";

export const Operation = ({ operation, dispatch, ...props }) => {
  function handleClick() {
    dispatch({ type: ACTIONS.ADD_OPERATION, payload: { operation } });
  }

  const handleKeydown = (e) => {
    if (e.key === operation.toString()) {
      handleClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <Button onClick={handleClick} {...props}>
      {operation}
    </Button>
  );
};

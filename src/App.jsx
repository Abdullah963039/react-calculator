import Calculator from "./components/Calculator";
import ThemeToggler from "./components/ThemeToggler";

import "./tailwind.css";

function App() {
  return (
    <div className="w-screen relative h-screen flex items-center justify-center bg-gradient-to-r from-emerald-400 to-sky-400 dark:from-emerald-700 dark:to-sky-700 overflow-hidden">
      <ThemeToggler />
      <Calculator />
    </div>
  );
}

export default App;

/**
 *
 * todo:  handle adding 0
 *
 * - focus styles for light & dark  > Buttons
 */

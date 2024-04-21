import { useEffect } from "react";

function useKeypress(key: string, action: () => void) {
  useEffect(() => {
    function onKeyup(e: any) {
      if (e.key === key) action();
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
}
export default useKeypress;

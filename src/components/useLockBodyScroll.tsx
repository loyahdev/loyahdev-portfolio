import { useLayoutEffect } from "react";

function useLockBodyScroll(isActive: boolean) {
  useLayoutEffect(() => {
    if (!isActive) return;

    // Store original overflow value
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Lock scrolling
    document.body.style.overflow = "hidden";

    return () => {
      // Restore original style on cleanup
      document.body.style.overflow = originalStyle;
    };
  }, [isActive]); // Re-run the effect only when `isActive` changes
}

export default useLockBodyScroll;
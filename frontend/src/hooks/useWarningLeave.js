import { useEffect } from "react";

const useWarningLeave = () => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () =>  window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [])
}

export default useWarningLeave
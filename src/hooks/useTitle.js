import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Koni's Kitchen`;
  }, [title]);
};

export default useTitle;

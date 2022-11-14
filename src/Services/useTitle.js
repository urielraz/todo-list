import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    document.title = "My App | " + title;
  }, [title]);
  return <div>useTitle</div>;
}

export default useTitle;

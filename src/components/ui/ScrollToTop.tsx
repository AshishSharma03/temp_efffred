import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if(location.pathname=== "/services"){
        return

    }else if (hash) {
      const id = hash.replace("#", "");

      // small delay to allow lazy/animated content to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}

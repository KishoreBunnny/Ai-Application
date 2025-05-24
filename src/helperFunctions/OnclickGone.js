import { useEffect } from "react";

export default function OnClickAnyWhereGone(sectionRef, setToggle) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setToggle(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
}
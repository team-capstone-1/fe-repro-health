import { useRef, useEffect } from "react";

export function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    if (title === "ReproHealth") {
      document.title = "ReproHealth";
    } else document.title = `${title} | ReproHealth`;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [],
  );
}

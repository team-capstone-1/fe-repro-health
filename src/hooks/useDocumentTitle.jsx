import { useRef, useEffect } from "react";

export function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = `${title} | ReproHealth`;
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

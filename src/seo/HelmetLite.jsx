import { createContext, useContext, useEffect } from "react";

const HelmetContext = createContext({ setTitle: () => {} });

export const HelmetProvider = ({ children }) => {
  const setTitle = (title) => {
    if (title) document.title = title;
  };
  return <HelmetContext.Provider value={{ setTitle }}>{children}</HelmetContext.Provider>;
};

export const SEO = ({ title, description }) => {
  const { setTitle } = useContext(HelmetContext);

  useEffect(() => {
    setTitle(title ? `${title} | Mydex International` : "Mydex International");
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description, setTitle]);

  return null;
};

export default SEO;

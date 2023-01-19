import { useEffect, useState } from "react";

/* const stateShape = [
  {
    url: "",
    shortenedUrl: "",
  },
]; */

const LOCAL_STORAGE_KEY = "shrtLinks";

const useLinks = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  }, []);

  const updateLinks = (updatedLinks) => {
    setLinks(updatedLinks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLinks));
  };

  const saveLink = (newLink) => {
    !links.length ? updateLinks([newLink]) : updateLinks([...links, newLink]);
  };

  return {
    links,
    saveLink,
  };
};

export { useLinks };

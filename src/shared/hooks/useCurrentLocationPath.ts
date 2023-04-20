import { useLocation } from "react-router-dom";

export const useCurrentLocationPath = () => {
  const location = useLocation();

  return { pathName: location.pathname, hash: location.hash, search: location.search };
};

import { get } from "lodash";
import { useLocation } from "react-router-dom";

export const useGetLocationStateParams = (paths: string[]) => {
  const location = useLocation();

  if (!Object.keys(location.state).length) return [];

  return paths.map((path) => {
    const value = get(location.state, path);

    if (value === undefined) {
      return null;
    }

    return value;
  });
};

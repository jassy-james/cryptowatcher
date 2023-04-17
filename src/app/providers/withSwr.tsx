import { ReactNode } from "react";
import { SWRConfig, SWRConfiguration } from "swr";

const swrConfig: SWRConfiguration = {
  fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
};

export const withSwr = (component: () => ReactNode) => {
  return <SWRConfig value={swrConfig}>{component()}</SWRConfig>;
};

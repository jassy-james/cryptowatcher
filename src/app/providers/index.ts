import compose from "compose-function";

// import { withReactQuery } from "@/app/providers/withReactQuery";

import { withRouter } from "@/app/providers/withRouter";
import { withSwr } from "@/app/providers/withSwr";

export const withProviders = compose(withRouter, withSwr);

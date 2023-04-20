import compose from "compose-function";

import { withRouter } from "@/app/providers/withRouter";
import { withSwr } from "@/app/providers/withSwr";

export const withProviders = compose(withRouter, withSwr);

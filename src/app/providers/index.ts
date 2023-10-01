import { withRedux } from "./withRedux";
import { withRouter } from "./withRouter";
import composition from "features/composition";

export const withProviders = composition(withRouter,withRedux);
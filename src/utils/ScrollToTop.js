import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

// Scroll restoration based on https://reacttraining.com/react-router/web/guides/scroll-restoration.
const ScrollToTop = withRouter(
  class ScrollToTopWithoutRouter extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }

    render() {
      return null;
    }
  }
);
export default ScrollToTop;

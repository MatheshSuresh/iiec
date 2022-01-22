import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
// Usage: <Router>
//   <Fragment>
//     <ScrollToTop />
//     <Switch>
//       <Route path='/' exact component={Home} />
//     </Switch>
//   </Fragment>
// </Router>;

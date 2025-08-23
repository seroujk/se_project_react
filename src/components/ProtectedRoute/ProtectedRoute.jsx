import { useLocation, Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn, anonymous = false }) {
  const location = useLocation();
  const from = location.state?.from || "/";

  // If the user is logged in we redirect them away from our
  // anonymous routes.
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  // If a user is not logged in and tries to access a route that
  // requires authorization, we redirect them to the /login route.
  if (!anonymous && !isLoggedIn) {
    // While redirecting to /login we set the location objects
    // state.from property to store the current location value.
    // This allows us to redirect them appropriately after they
    // log in.
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

export default ProtectedRoute;

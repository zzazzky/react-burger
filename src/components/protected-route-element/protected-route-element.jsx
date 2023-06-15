import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRouteElement({ element }) {
  const isLoggedIn = useSelector((store) => store.profile.user.isLoggedIn);
  const location = useLocation();

  const isUserLoading = useSelector(
    (store) =>
      !store.profile.userInfoRequest.isUserInfoRequestSuccess &&
      !store.profile.tokenRequest.isTokenRequestFailed
  );

  if (isUserLoading) {
    return null;
  } else {
    return isLoggedIn ? (
      element
    ) : (
      <Navigate
        to='/login'
        state={{ from: location.pathname }}
      />
    );
  }
}
export default ProtectedRouteElement;

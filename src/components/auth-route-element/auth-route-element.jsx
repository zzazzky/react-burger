import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function AuthRouteElement({ element }) {
  const isLoggedIn = useSelector((store) => store.profile.user.isLoggedIn);

  const location = useLocation();
  const from = location.state?.from || '/';
  const isUserLoading = useSelector(
    (store) =>
      !store.profile.userInfoRequest.isUserInfoRequestFailed &&
      !store.profile.userInfoRequest.isUserInfoRequestSuccess
  );
  if (isUserLoading) {
    return null;
  } else {
    return !isLoggedIn ? (
      element
    ) : (
      <Navigate
        to={from}
        replace
      />
    );
  }
}
export default AuthRouteElement;

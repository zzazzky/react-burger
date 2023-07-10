import React from 'react';
import { useSelector } from '../../types/hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface IAuthRouteElementProps {
  element: React.ReactElement;
}

const AuthRouteElement: React.FC<IAuthRouteElementProps> = ({ element }) => {
  const isLoggedIn = useSelector((store) => store.profile.user.isLoggedIn);

  const location = useLocation();
  const from: string = (location.state?.from as string) || '/';
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
};
export default AuthRouteElement;

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Istore } from '../../types/store-interface';

interface IAuthRouteElementProps {
  element: React.ReactElement;
}

const AuthRouteElement: React.FC<IAuthRouteElementProps> = ({ element }) => {
  const isLoggedIn = useSelector<Istore, boolean>(
    (store) => store.profile.user.isLoggedIn
  );

  const location = useLocation();
  const from: string = (location.state?.from as string) || '/';
  const isUserLoading = useSelector<Istore, boolean>(
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

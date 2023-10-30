import React from 'react';
import { useSelector } from '../../types/hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface IProtectedRouteElementProps {
  element: React.ReactElement;
}

const ProtectedRouteElement: React.FC<IProtectedRouteElementProps> = ({
  element,
}) => {
  const location = useLocation();

  const isLoggedIn = useSelector((store) => store.profile.user.isLoggedIn);

  const isUserLoading = useSelector(
    (store) =>
      !store.profile.userInfoRequest.isUserInfoRequestSuccess &&
      !store.profile.userInfoRequest.isUserInfoRequestFailed
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
};
export default ProtectedRouteElement;

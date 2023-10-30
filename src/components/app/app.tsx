import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerMaker from '../../pages/burger-maker/burger-maker';
import NotFound from '../../pages/not-found/not-found';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import Feed from '../../pages/feed/feed';
import { getIngredientsFeed } from '../../services/actions/ingredients';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import AuthRouteElement from '../auth-route-element/auth-route-element';
import { getUserInfo } from '../../services/actions/user';
import OrderHistory from '../../pages/order-history/order-history';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch } from '../../types/hooks';
import cookie from '../../utils/cookie';
import OrderInfo from '../order-info/order-info';

type LocationState = {
  path: string;
  background: string;
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let background: string =
    (location.state as LocationState) && location.state?.background;

  useEffect(() => {
    dispatch(getIngredientsFeed());
  }, []);

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

  useEffect(() => {
    if (location.state?.background) {
      navigate(location.state?.background);
    }
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={`pt-10 pb-10 ${appStyles.main}`}>
        <Routes location={location.state?.background || location}>
          <Route
            path='/main'
            element={<BurgerMaker />}
          />
          {background && <Route path='/ingredients/:ingredientId' />}
          <Route
            path='/ingredients/:ingredientId'
            element={<OrderInfo />}
          />
          {background && <Route path='/feed/:id' />}
          <Route
            path='/feed/:id'
            element={<OrderInfo />}
          />
          <Route
            path='/feed'
            element={<Feed />}
          />
          <Route
            path='/login'
            element={<AuthRouteElement element={<Login />} />}
          />
          <Route
            path='/register'
            element={<AuthRouteElement element={<Register />} />}
          />
          <Route
            path='/forgot-password'
            element={<AuthRouteElement element={<ForgotPassword />} />}
          />
          <Route
            path='/reset-password'
            element={<AuthRouteElement element={<ResetPassword />} />}
          />
          <Route
            path='/profile'
            element={<ProtectedRouteElement element={<Profile />} />}
          />
          {background && <Route path='/profile/orders/:id' />}
          <Route
            path='/profile/orders/:id'
            element={<ProtectedRouteElement element={<OrderInfo />} />}
          />
          <Route
            path='/profile/orders'
            element={<ProtectedRouteElement element={<OrderHistory />} />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;

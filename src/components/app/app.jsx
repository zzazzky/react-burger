import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerMaker from '../../pages/burger-maker/burger-maker';
import NotFound from '../../pages/not-found/not-found';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import { getIngredientsFeed } from '../../services/actions/ingredients';
import ProtectedRouteElement from '../protected-route-element/protected-route-element';
import AuthRouteElement from '../auth-route-element/auth-route-element';
import { getUserInfo } from '../../services/actions/user';
import OrderHistory from '../../pages/order-history/order-history';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  let background = location.state && location.state?.background;

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
    <div className='app'>
      <AppHeader />
      <main className='pt-10 pb-10 main'>
        <Routes location={location.state?.background || location}>
          <Route
            exact
            path='/'
            element={<BurgerMaker />}
          />
          {background && <Route path='/ingredients/:ingredientId' />}
          <Route
            path='/ingredients/:ingredientId'
            element={<IngredientDetails />}
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
}

export default App;

import React from 'react';
import { logout } from '../../services/actions/logout';
import { NavLink } from 'react-router-dom';
import { useDispatch } from '../../types/hooks';
import profileMenuStyles from './profile-menu.module.css';

function ProfileMenu() {
  const dispatch = useDispatch();

  const handleLogoutButtonClick = () => {
    dispatch(logout());
  };

  return (
    <ul className={profileMenuStyles.linkList}>
      <li className='text text_type_main-medium pt-5 pb-5'>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            isActive
              ? `${profileMenuStyles.linkActive} text text_type_main-medium`
              : `${profileMenuStyles.link} text text_type_main-medium text_color_inactive`
          }>
          Профиль
        </NavLink>
      </li>
      <li className='pt-5 pb-5'>
        <NavLink
          to='/profile/orders'
          className={({ isActive }) =>
            isActive
              ? `${profileMenuStyles.linkActive} text text_type_main-medium`
              : `${profileMenuStyles.link} text text_type_main-medium text_color_inactive`
          }>
          История заказов
        </NavLink>
      </li>
      <li className='pt-5 pb-5'>
        <button
          onClick={handleLogoutButtonClick}
          className={`${profileMenuStyles.link} text text_type_main-medium text_color_inactive`}>
          Выход
        </button>
      </li>
    </ul>
  );
}
export default ProfileMenu;

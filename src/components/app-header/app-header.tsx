import React from 'react';
import { useLocation } from 'react-router-dom';
import headerStyles from './app-header.module.css';
import HeaderLink from '../header-link/header-link';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const location = useLocation();

  return (
    <header className={`${headerStyles.appHeader}  pb-4 pt-4`}>
      <nav className={headerStyles.navBar}>
        <div className={headerStyles.headerContainer}>
          <HeaderLink
            icon={
              <BurgerIcon
                type={location.pathname === '/' ? 'primary' : 'secondary'}
              />
            }
            to='/'>
            Конструктор
          </HeaderLink>
          <HeaderLink
            icon={
              <ListIcon
                type={
                  location.pathname.startsWith('/orders')
                    ? 'primary'
                    : 'secondary'
                }
              />
            }
            to='/orders'>
            Лента заказов
          </HeaderLink>
        </div>
        <NavLink to='/'>
          <Logo />
        </NavLink>
        <HeaderLink
          icon={
            <ProfileIcon
              type={
                location.pathname.startsWith('/profile')
                  ? 'primary'
                  : 'secondary'
              }
            />
          }
          to='/profile'>
          Личный кабинет
        </HeaderLink>
      </nav>
    </header>
  );
};

export default AppHeader;

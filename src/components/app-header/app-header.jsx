import headerStyles from './app-header.module.css';
import HeaderLink from '../header-link/header-link';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${headerStyles.appHeader}  pb-4 pt-4`}>
      <nav className={headerStyles.navBar}>
        <div className={headerStyles.headerContainer}>
          <HeaderLink
            icon={BurgerIcon}
            to='/'>
            Конструктор
          </HeaderLink>
          <HeaderLink
            icon={ListIcon}
            to='/orders'>
            Лента заказов
          </HeaderLink>
        </div>
        <Logo />
        <HeaderLink
          icon={ProfileIcon}
          to='/profile'>
          Личный кабинет
        </HeaderLink>
      </nav>
    </header>
  );
}

export default AppHeader;

import headerStyles from './app-header.module.css';
import HeaderButton from '../header-button/header-button';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={`${headerStyles.appHeader}  pb-4 pt-4`}>
      <nav className={headerStyles.navBar}>
        <div className={headerStyles.headerContainer}>
          <HeaderButton
            icon={BurgerIcon}
            buttonText='Конструктор'
            to='/'
          />
          <HeaderButton
            icon={ListIcon}
            buttonText='Лента заказов'
            to='/'
          />
        </div>
        <Logo />
        <HeaderButton
          icon={ProfileIcon}
          buttonText='Личный кабинет'
          to='/'
        />
      </nav>
    </header>
  );
}

export default AppHeader;

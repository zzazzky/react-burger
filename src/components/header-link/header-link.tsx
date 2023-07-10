import React from 'react';
import { NavLink } from 'react-router-dom';
import headerLinkStyles from './header-link.module.css';

interface IHeaderLinkProps {
  children: string;
  to: string;
  icon: React.ReactNode;
}

const HeaderLink: React.FC<IHeaderLinkProps> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive
          ? `${headerLinkStyles.link} pl-5 pr-5 pb-4 pt-4`
          : `${headerLinkStyles.link_unactive} pl-5 pr-5 pb-4 pt-4`
      }>
      {props.icon}
      <p className='pl-2 text text_type_main-default'>{props.children}</p>
    </NavLink>
  );
};

export default HeaderLink;

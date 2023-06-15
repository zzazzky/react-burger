import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import headerLinkStyles from './header-link.module.css';

function HeaderLink(props) {
  const location = useLocation();
  const IconType =
    props.to === '/'
      ? location.pathname === '/'
        ? 'primary'
        : 'secondary'
      : location.pathname.startsWith(props.to)
      ? 'primary'
      : 'secondary';

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive
          ? `${headerLinkStyles.link} pl-5 pr-5 pb-4 pt-4`
          : `${headerLinkStyles.link_unactive} pl-5 pr-5 pb-4 pt-4`
      }>
      <props.icon type={IconType} />
      <p className='pl-2 text text_type_main-default'>{props.children}</p>
    </NavLink>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default HeaderLink;

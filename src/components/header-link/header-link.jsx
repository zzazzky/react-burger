import PropTypes from 'prop-types';
import headerLinkStyles from './header-link.module.css';
import { NavLink } from 'react-router-dom';

function HeaderLink(props) {
  //временное решение до реализации роутера
  const linkClass =
    props.text === 'Конструктор'
      ? headerLinkStyles.link
      : headerLinkStyles.link_unactive;
  const IconType = props.text === 'Конструктор' ? 'primary' : 'secondary';
  const Icon = <props.icon type={IconType} />;

  return (
    <NavLink
      to={props.to}
      className={`${linkClass} pl-5 pr-5 pb-4 pt-4`}>
      {Icon}
      <p className='pl-2 text text_type_main-default'>{props.children}</p>
    </NavLink>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default HeaderLink;

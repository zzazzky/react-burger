import PropTypes from 'prop-types';
import headerButtonStyles from './header-button.module.css';
import { Link } from 'react-router-dom';

function HeaderButton(props) {
  //временное решение до реализации роутера
  const buttonClass =
    props.buttonText === 'Конструктор'
      ? headerButtonStyles.button
      : headerButtonStyles.button_unactive;
  const IconType = props.buttonText === 'Конструктор' ? 'primary' : 'secondary';
  const Icon = <props.icon type={IconType} />;

  return (
    <Link
      to={props.to}
      className={`${buttonClass} pl-5 pr-5 pb-4 pt-4`}>
      {Icon}
      <p className='pl-2 text text_type_main-default'>{props.buttonText}</p>
    </Link>
  );
}

HeaderButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default HeaderButton;

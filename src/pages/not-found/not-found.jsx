import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import notFoundStyles from './not-found.module.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={notFoundStyles.container}>
      <h1 className='text text_type_main-large'>Страница не найдена</h1>
      <p className='text text_type_digits-large mt-10 mb-10'>404</p>
      <Button
        htmlType='button'
        type='primary'
        size='medium'
        onClick={() => navigate(-1, { replace: true })}>
        Вернуться
      </Button>
    </div>
  );
}

export default NotFound;

import { useEffect, useState } from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerMaker from '../burger-maker/burger-maker';
import { BrowserRouter } from 'react-router-dom';
import api from '../../utils/api';

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [replacementText, setReplacementText] = useState(
    'Ваши бургеры летят к вам с края Вселенной'
  );

  useEffect(() => {
    if (apiData.length > 0) {
      setIsLoaded(true);
      replacementText !== 'Ваши бургеры летят к вам с края Вселенной' &&
        setReplacementText('Ваши бургеры летят к вам с края Вселенной');
    } else {
      setIsLoaded(false);
    }
  }, [apiData]);

  useEffect(() => {
    api
      .getIngredients()
      .then((res) => setApiData(res))
      .catch(() =>
        setReplacementText(
          'Упс, что-то пошло не так и ваши бургеры улетели в соседнюю галактику! Попробуйте перезагрузить страницу, вдруг они уже прилетели'
        )
      );
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <main className='pt-10 pb-10 main'>
          {
            //компонент страницы для того, чтобы не переделывать  структуру при реализации роутера
          }
          <BurgerMaker
            data={apiData}
            isLoaded={isLoaded}
            replacementText={replacementText}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

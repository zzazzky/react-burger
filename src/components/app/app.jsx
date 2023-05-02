import { useEffect, useState } from 'react';
import './app.css';
import AppHeader from '../app-header/app-header';
import BurgerMaker from '../burger-maker/burger-maker';
import { BrowserRouter } from 'react-router-dom';
import api from '../../utils/api';

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    api
      .getIngredients()
      .then((res) => setApiData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <AppHeader />
        <main className='pt-10 pb-10 main'>
          {
            //компонент страницы для того, чтобы не переделывать  структуру при реализации роутера
          }
          <BurgerMaker data={apiData} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

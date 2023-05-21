import burgerMakerStyles from './burger-maker.module.css';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function BurgerMaker(props) {
  if (props.isLoaded) {
    return (
      <div className={burgerMakerStyles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      </div>
    );
  } else {
    return (
      <section className={burgerMakerStyles.textContainer}>
        <p className='text text_type_main-large'>{props.replacementText}</p>
      </section>
    );
  }
}

export default BurgerMaker;

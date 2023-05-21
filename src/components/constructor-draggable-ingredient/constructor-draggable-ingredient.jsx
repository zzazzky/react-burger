import { useRef } from 'react';
import draggableIngredientStyles from './constructor-draggable-ingredient.module.css';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
} from '../../services/actions/constructor';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

const DraggableContainer = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'constructor-ingredient',
    item: { index },
  });

  const [{ isHover }, constructorSortTarget] = useDrop({
    accept: 'constructor-ingredient',
    drop(ingredient) {
      handleIngredientSortDrop(ingredient.index, index);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const ref = useRef(null);

  const dragDropRef = dragRef(constructorSortTarget(ref));

  const handleIngredientSortDrop = (dragIndex, dropIndex) => {
    dispatch({
      type: SORT_CONSTRUCTOR_INGREDIENTS,
      payload: {
        dragIndex: dragIndex,
        dropIndex: dropIndex,
      },
    });
  };

  const deleteIngredient = () => {
    dispatch({
      type: DELETE_CONSTRUCTOR_INGREDIENT,
      payload: {
        index: index,
        price: ingredient.price,
      },
    });
  };

  return (
    <div
      className={
        isHover
          ? draggableIngredientStyles.itemContainerHover
          : draggableIngredientStyles.itemContainer
      }
      ref={dragDropRef}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => deleteIngredient()}
      />
    </div>
  );
};

export default DraggableContainer;

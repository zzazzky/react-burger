import React from 'react';
import draggableIngredientStyles from './constructor-draggable-ingredient.module.css';
import { useDispatch } from '../../types/hooks';
import { useDrag, useDrop } from 'react-dnd';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
} from '../../services/сonstants/actions';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredient } from '../../types/store-interface';

interface IDraggableContainerProps {
  ingredient: IIngredient;
  index: number;
}

const DraggableContainer: React.FC<IDraggableContainerProps> = ({
  ingredient,
  index,
}) => {
  const dispatch = useDispatch();

  const handleIngredientSortDrop = (dragIndex: number, dropIndex: number) => {
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

  const [, dragRef] = useDrag(() => ({
    type: 'constructor-ingredient',
    item: { index },
  }));

  const [{ isHover }, constructorSortTarget] = useDrop(() => ({
    accept: 'constructor-ingredient',
    drop: (ingredient: IIngredient & { readonly index: number }) => {
      handleIngredientSortDrop(ingredient.index, index);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  }));

  return (
    <div
      className={
        isHover
          ? draggableIngredientStyles.itemContainerHover
          : draggableIngredientStyles.itemContainer
      }
      ref={(node) => dragRef(constructorSortTarget(node))}>
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

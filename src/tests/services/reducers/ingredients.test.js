import ingredients from '../../../services/reducers/ingredients';
import {
  GET_INGREDIENT_FEED,
  GET_INGREDIENT_FEED_FAILED,
  GET_INGREDIENT_FEED_SUCCESS,
  SET_INGREDIENTS,
  SET_CURRENT_INGREDIENT,
  DELETE_CURRENT_INGREDIENT,
} from '../../../services/сonstants/actions';

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(ingredients(undefined, {})).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: false,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: true,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: false,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED_FAILED', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: true,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED_FAILED,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: false,
      ingredientsFeedFailed: true,
      ingredientsFeedSuccess: false,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED_SUCCESS', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: true,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED_SUCCESS,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: null,
    });
  });

  it('should handle SET_INGREDIENTS', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: true,
          currentIngredient: null,
        },
        {
          type: SET_INGREDIENTS,
          payload: {
            ingredients: [
              {
                _id: '60666c42cc7b410027a1a9b1',
                name: 'Краторная булка N-200i',
                type: 'bun',
                proteins: 80,
                fat: 24,
                carbohydrates: 53,
                calories: 420,
                price: 1255,
                image: 'https://code.s3.yandex.net/react/code/bun-02.png',
                image_mobile:
                  'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
                image_large:
                  'https://code.s3.yandex.net/react/code/bun-02-large.png',
                __v: 0,
              },
              {
                _id: '60666c42cc7b410027a1a9b5',
                name: 'Говяжий метеорит (отбивная)',
                type: 'main',
                proteins: 800,
                fat: 800,
                carbohydrates: 300,
                calories: 2674,
                price: 3000,
                image: 'https://code.s3.yandex.net/react/code/meat-04.png',
                image_mobile:
                  'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
                image_large:
                  'https://code.s3.yandex.net/react/code/meat-04-large.png',
                __v: 0,
              },
              {
                _id: '60666c42cc7b410027a1a9b7',
                name: 'Соус Spicy-X',
                type: 'sauce',
                proteins: 30,
                fat: 20,
                carbohydrates: 40,
                calories: 30,
                price: 90,
                image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
                image_mobile:
                  'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
                image_large:
                  'https://code.s3.yandex.net/react/code/sauce-02-large.png',
                __v: 0,
              },
            ],
          },
        }
      )
    ).toEqual({
      buns: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
      sauces: [
        {
          _id: '60666c42cc7b410027a1a9b7',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
        },
      ],
      mains: [
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: true,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: false,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED_FAILED', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: true,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED_FAILED,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: false,
      ingredientsFeedFailed: true,
      ingredientsFeedSuccess: false,
      currentIngredient: null,
    });
  });

  it('should handle GET_INGREDIENT_FEED_SUCCESS', () => {
    expect(
      ingredients(
        {
          buns: null,
          sauces: null,
          mains: null,
          ingredientsRequest: true,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: false,
          currentIngredient: null,
        },
        {
          type: GET_INGREDIENT_FEED_SUCCESS,
        }
      )
    ).toEqual({
      buns: null,
      sauces: null,
      mains: null,
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: null,
    });
  });

  it('should handle SET_CURRENT_INGREDIENT (bun)', () => {
    expect(
      ingredients(
        {
          buns: [
            {
              _id: '60666c42cc7b410027a1a9b1',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png',
              __v: 0,
            },
          ],
          sauces: [
            {
              _id: '60666c42cc7b410027a1a9b7',
              name: 'Соус Spicy-X',
              type: 'sauce',
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/sauce-02-large.png',
              __v: 0,
            },
          ],
          mains: [
            {
              _id: '60666c42cc7b410027a1a9b5',
              name: 'Говяжий метеорит (отбивная)',
              type: 'main',
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: 'https://code.s3.yandex.net/react/code/meat-04.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/meat-04-large.png',
              __v: 0,
            },
          ],
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: true,
          currentIngredient: null,
        },
        {
          type: SET_CURRENT_INGREDIENT,
          payload: {
            ingredient: '60666c42cc7b410027a1a9b1',
          },
        }
      )
    ).toEqual({
      buns: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
      sauces: [
        {
          _id: '60666c42cc7b410027a1a9b7',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
        },
      ],
      mains: [
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: {
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
      },
    });
  });

  it('should handle SET_CURRENT_INGREDIENT (sauce)', () => {
    expect(
      ingredients(
        {
          buns: [
            {
              _id: '60666c42cc7b410027a1a9b1',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png',
              __v: 0,
            },
          ],
          sauces: [
            {
              _id: '60666c42cc7b410027a1a9b7',
              name: 'Соус Spicy-X',
              type: 'sauce',
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/sauce-02-large.png',
              __v: 0,
            },
          ],
          mains: [
            {
              _id: '60666c42cc7b410027a1a9b5',
              name: 'Говяжий метеорит (отбивная)',
              type: 'main',
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: 'https://code.s3.yandex.net/react/code/meat-04.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/meat-04-large.png',
              __v: 0,
            },
          ],
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: true,
          currentIngredient: null,
        },
        {
          type: SET_CURRENT_INGREDIENT,
          payload: {
            ingredient: '60666c42cc7b410027a1a9b7',
          },
        }
      )
    ).toEqual({
      buns: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
      sauces: [
        {
          _id: '60666c42cc7b410027a1a9b7',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
        },
      ],
      mains: [
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: {
        _id: '60666c42cc7b410027a1a9b7',
        name: 'Соус Spicy-X',
        type: 'sauce',
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
        __v: 0,
      },
    });
  });

  it('should handle SET_CURRENT_INGREDIENT (main)', () => {
    expect(
      ingredients(
        {
          buns: [
            {
              _id: '60666c42cc7b410027a1a9b1',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png',
              __v: 0,
            },
          ],
          sauces: [
            {
              _id: '60666c42cc7b410027a1a9b7',
              name: 'Соус Spicy-X',
              type: 'sauce',
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/sauce-02-large.png',
              __v: 0,
            },
          ],
          mains: [
            {
              _id: '60666c42cc7b410027a1a9b5',
              name: 'Говяжий метеорит (отбивная)',
              type: 'main',
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: 'https://code.s3.yandex.net/react/code/meat-04.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/meat-04-large.png',
              __v: 0,
            },
          ],
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: true,
          currentIngredient: null,
        },
        {
          type: SET_CURRENT_INGREDIENT,
          payload: {
            ingredient: '60666c42cc7b410027a1a9b5',
          },
        }
      )
    ).toEqual({
      buns: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
      sauces: [
        {
          _id: '60666c42cc7b410027a1a9b7',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
        },
      ],
      mains: [
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: {
        _id: '60666c42cc7b410027a1a9b5',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile:
          'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        __v: 0,
      },
    });
  });

  it('should handle DELETE_CURRENT_INGREDIENT', () => {
    expect(
      ingredients(
        {
          buns: [
            {
              _id: '60666c42cc7b410027a1a9b1',
              name: 'Краторная булка N-200i',
              type: 'bun',
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
              image: 'https://code.s3.yandex.net/react/code/bun-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-02-large.png',
              __v: 0,
            },
          ],
          sauces: [
            {
              _id: '60666c42cc7b410027a1a9b7',
              name: 'Соус Spicy-X',
              type: 'sauce',
              proteins: 30,
              fat: 20,
              carbohydrates: 40,
              calories: 30,
              price: 90,
              image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/sauce-02-large.png',
              __v: 0,
            },
          ],
          mains: [
            {
              _id: '60666c42cc7b410027a1a9b5',
              name: 'Говяжий метеорит (отбивная)',
              type: 'main',
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: 'https://code.s3.yandex.net/react/code/meat-04.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/meat-04-large.png',
              __v: 0,
            },
          ],
          ingredientsRequest: false,
          ingredientsFeedFailed: false,
          ingredientsFeedSuccess: true,
          currentIngredient: {
            _id: '60666c42cc7b410027a1a9b5',
            name: 'Говяжий метеорит (отбивная)',
            type: 'main',
            proteins: 800,
            fat: 800,
            carbohydrates: 300,
            calories: 2674,
            price: 3000,
            image: 'https://code.s3.yandex.net/react/code/meat-04.png',
            image_mobile:
              'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
            image_large:
              'https://code.s3.yandex.net/react/code/meat-04-large.png',
            __v: 0,
          },
        },
        {
          type: DELETE_CURRENT_INGREDIENT,
        }
      )
    ).toEqual({
      buns: [
        {
          _id: '60666c42cc7b410027a1a9b1',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
      sauces: [
        {
          _id: '60666c42cc7b410027a1a9b7',
          name: 'Соус Spicy-X',
          type: 'sauce',
          proteins: 30,
          fat: 20,
          carbohydrates: 40,
          calories: 30,
          price: 90,
          image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/sauce-02-large.png',
          __v: 0,
        },
      ],
      mains: [
        {
          _id: '60666c42cc7b410027a1a9b5',
          name: 'Говяжий метеорит (отбивная)',
          type: 'main',
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: 'https://code.s3.yandex.net/react/code/meat-04.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
          image_large:
            'https://code.s3.yandex.net/react/code/meat-04-large.png',
          __v: 0,
        },
      ],
      ingredientsRequest: false,
      ingredientsFeedFailed: false,
      ingredientsFeedSuccess: true,
      currentIngredient: null,
    });
  });
});

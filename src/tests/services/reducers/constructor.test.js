import constructor from '../../../services/reducers/constructor';
import {
  DELETE_CONSTRUCTOR_INGREDIENT,
  ADD_CONSTRUCTOR_INGREDIENT,
  SORT_CONSTRUCTOR_INGREDIENTS,
  SET_CONSTRUCTOR,
} from '../../../services/сonstants/actions';

describe('constructor reducer', () => {
  it('should return the initial state', () => {
    expect(constructor(undefined, {})).toEqual({
      bun: null,
      ingredients: null,
      sum: 0,
    });
  });

  it('should handle SET_CONSTRUCTOR', () => {
    expect(
      constructor(
        {
          bun: null,
          ingredients: null,
          sum: 0,
        },
        {
          type: SET_CONSTRUCTOR,
          payload: {
            bun: {
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
            ingredients: [
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
      bun: {
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
      ingredients: [
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
      sum: 5600,
    });
  });

  it('should handle ADD_CONSTRUCTOR_INGREDIENT (bun)', () => {
    expect(
      constructor(
        {
          bun: {
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
          ingredients: [
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
          sum: 5600,
        },
        {
          type: ADD_CONSTRUCTOR_INGREDIENT,
          payload: {
            ingredient: {
              _id: '60666c42cc7b410027a1a9b2',
              name: 'Флюоресцентная булка R2-D3',
              type: 'bun',
              proteins: 44,
              fat: 26,
              carbohydrates: 85,
              calories: 643,
              price: 988,
              image: 'https://code.s3.yandex.net/react/code/bun-01.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/bun-01-large.png',
              __v: 0,
            },
          },
        }
      )
    ).toEqual({
      bun: {
        _id: '60666c42cc7b410027a1a9b2',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0,
      },
      ingredients: [
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
      sum: 5066,
    });
  });

  it('should handle ADD_CONSTRUCTOR_INGREDIENT (ingredient)', () => {
    expect(
      constructor(
        {
          bun: {
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
          ingredients: [
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
          sum: 5600,
        },
        {
          type: ADD_CONSTRUCTOR_INGREDIENT,
          payload: {
            ingredient: {
              _id: '60666c42cc7b410027a1a9bf',
              name: 'Сыр с астероидной плесенью',
              type: 'main',
              proteins: 84,
              fat: 48,
              carbohydrates: 420,
              calories: 3377,
              price: 4142,
              image: 'https://code.s3.yandex.net/react/code/cheese.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/cheese-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/cheese-large.png',
              __v: 0,
            },
          },
        }
      )
    ).toEqual({
      bun: {
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
      ingredients: [
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
        {
          _id: '60666c42cc7b410027a1a9bf',
          name: 'Сыр с астероидной плесенью',
          type: 'main',
          proteins: 84,
          fat: 48,
          carbohydrates: 420,
          calories: 3377,
          price: 4142,
          image: 'https://code.s3.yandex.net/react/code/cheese.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/cheese-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
          __v: 0,
        },
      ],
      sum: 9742,
    });
  });

  it('should handle DELETE_CONSTRUCTOR_INGREDIENT', () => {
    expect(
      constructor(
        {
          bun: {
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
          ingredients: [
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
          sum: 5600,
        },
        {
          type: DELETE_CONSTRUCTOR_INGREDIENT,
          payload: {
            index: 1,
            price: 90,
          },
        }
      )
    ).toEqual({
      bun: {
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
      ingredients: [
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
      sum: 5510,
    });
  });

  it('should handle SORT_CONSTRUCTOR_INGREDIENTS (up)', () => {
    expect(
      constructor(
        {
          bun: {
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
          ingredients: [
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
            {
              _id: '60666c42cc7b410027a1a9bf',
              name: 'Сыр с астероидной плесенью',
              type: 'main',
              proteins: 84,
              fat: 48,
              carbohydrates: 420,
              calories: 3377,
              price: 4142,
              image: 'https://code.s3.yandex.net/react/code/cheese.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/cheese-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/cheese-large.png',
              __v: 0,
            },
          ],
          sum: 9742,
        },
        {
          type: SORT_CONSTRUCTOR_INGREDIENTS,
          payload: {
            dropIndex: 0,
            dragIndex: 2,
          },
        }
      )
    ).toEqual({
      bun: {
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
      ingredients: [
        {
          _id: '60666c42cc7b410027a1a9bf',
          name: 'Сыр с астероидной плесенью',
          type: 'main',
          proteins: 84,
          fat: 48,
          carbohydrates: 420,
          calories: 3377,
          price: 4142,
          image: 'https://code.s3.yandex.net/react/code/cheese.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/cheese-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
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
      sum: 9742,
    });
  });

  it('should handle SORT_CONSTRUCTOR_INGREDIENTS (down)', () => {
    expect(
      constructor(
        {
          bun: {
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
          ingredients: [
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
            {
              _id: '60666c42cc7b410027a1a9bf',
              name: 'Сыр с астероидной плесенью',
              type: 'main',
              proteins: 84,
              fat: 48,
              carbohydrates: 420,
              calories: 3377,
              price: 4142,
              image: 'https://code.s3.yandex.net/react/code/cheese.png',
              image_mobile:
                'https://code.s3.yandex.net/react/code/cheese-mobile.png',
              image_large:
                'https://code.s3.yandex.net/react/code/cheese-large.png',
              __v: 0,
            },
          ],
          sum: 9742,
        },
        {
          type: SORT_CONSTRUCTOR_INGREDIENTS,
          payload: {
            dropIndex: 2,
            dragIndex: 0,
          },
        }
      )
    ).toEqual({
      bun: {
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
      ingredients: [
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
          _id: '60666c42cc7b410027a1a9bf',
          name: 'Сыр с астероидной плесенью',
          type: 'main',
          proteins: 84,
          fat: 48,
          carbohydrates: 420,
          calories: 3377,
          price: 4142,
          image: 'https://code.s3.yandex.net/react/code/cheese.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/cheese-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/cheese-large.png',
          __v: 0,
        },
      ],
      sum: 9742,
    });
  });
});

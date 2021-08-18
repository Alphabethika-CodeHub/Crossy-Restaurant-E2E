import FavoriteFoodIdb from '../src/scripts/data/favoriteFoods-idb';
import * as TestFactory from './helpers/TestFactory';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Adding Restaurant to Favourite', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const dataRestaurant = await FavoriteFoodIdb.getFood(1);

    expect(dataRestaurant).toEqual({ id: 1 });
    FavoriteFoodIdb.deleteFood(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteFoodIdb.putFood({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteFoodIdb.getAllFoods()).toEqual([{ id: 1 }]);

    FavoriteFoodIdb.deleteFood(1);
  });

  // it('should not add a movie when it has no id', async () => {
  //   await TestFactory.createLikeButtonPresenterWithRestaurant({ });
  //   document.querySelector('#likeButton').dispatchEvent(new Event('click'));
  //   expect(await FavoriteFoodIdb.getAllFoods()).toEqual([]);
  // });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteFoodIdb.getAllFoods()).toEqual([]);
  });
});

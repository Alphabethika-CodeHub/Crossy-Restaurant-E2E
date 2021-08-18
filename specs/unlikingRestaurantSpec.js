import FavoriteFoodIdb from '../src/scripts/data/favoriteFoods-idb';
import * as TestFactory from './helpers/TestFactory';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteFoodIdb.putFood({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteFoodIdb.deleteFood(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteFoodIdb.getAllFoods()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactory.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteFoodIdb.deleteFood(1);
    document
      .querySelector('[aria-label="unlike this restaurant"]')
      .dispatchEvent(new Event('click'));

    expect(await FavoriteFoodIdb.getAllFoods()).toEqual([]);
  });
});

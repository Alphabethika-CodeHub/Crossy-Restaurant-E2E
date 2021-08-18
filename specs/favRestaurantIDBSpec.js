import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';
import FavoriteFoodIdb from '../src/scripts/data/favoriteFoods-idb';

describe('Favorite Restaurant IDB Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteFoodIdb.getAllFoods()).forEach(async (restaurant) => {
      await FavoriteFoodIdb.deleteFood(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteFoodIdb);
});

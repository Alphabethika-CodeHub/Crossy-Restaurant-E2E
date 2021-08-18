import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getFood(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllFoods() {
    return favoriteRestaurants;
  },

  putFood(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getFood(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteFood(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});

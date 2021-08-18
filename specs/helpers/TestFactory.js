import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteFoodIdb from '../../src/scripts/data/favoriteFoods-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    fooddb: FavoriteFoodIdb,
    data: {
      restaurant,
    },
  });
};

export { createLikeButtonPresenterWithRestaurant };

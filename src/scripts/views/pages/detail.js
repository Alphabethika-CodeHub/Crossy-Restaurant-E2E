import { createRestaurantDetailTemplate } from '../templates/template-creator';
import RestaurantsDBSource from '../../data/restaurantsdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteFoodIdb from '../../data/favoriteFoods-idb';

const Detail = {
  async render() {
    return `
    <div class="res" id="resDetail"></div>
    <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resDetailContainer = document.querySelector('#resDetail');

    try {
      const data = await RestaurantsDBSource.restaurantDetail(url.id);
      resDetailContainer.innerHTML += createRestaurantDetailTemplate(data.restaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        fooddb: FavoriteFoodIdb,
        data,
      });
    } catch (err) {
      resDetailContainer.innerHTML = `Error: ${err}.`;
    }
  },
};

export default Detail;

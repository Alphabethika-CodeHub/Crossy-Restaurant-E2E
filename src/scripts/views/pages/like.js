import FavoriteFoodIdb from '../../data/favoriteFoods-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <section id="res_container" class="res_container"></section>
    </div>`;
  },

  async afterRender() {
    const dtrestaurants = await FavoriteFoodIdb.getAllFoods();
    const restaurantContainer = document.querySelector('#res_container');
    if (dtrestaurants.length === 0) {
      restaurantContainer.innerHTML = `
        Kamu Belum Menyukai Satu Restaurant Pun
      `;
    }
    dtrestaurants.forEach((dtrest) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(dtrest);
    });
  },
};

export default Like;

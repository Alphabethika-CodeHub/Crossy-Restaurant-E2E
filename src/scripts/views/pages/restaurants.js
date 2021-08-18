import RestaurantsDBSource from '../../data/restaurantsdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <hero-element></hero-element>
    <div class="content">
        <div class="content__heading">
            <h2>Restaurants List</h2>
            <hr>
        </div>
        <div id="restaurant_content" class="res_container"></div>
    </div>`;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant_content');
    restaurantContainer.innerHTML = '';
    try {
      const data = await RestaurantsDBSource.restaurantList();
      console.log(data);
      data.restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      restaurantContainer.innerHTML = `Error: ${err}.`;
    }
  },
};

export default Restaurants;

import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsDBSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANTS);
    return response.json();
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantsDBSource;

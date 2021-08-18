import Restaurants from '../views/pages/restaurants';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurants, // default page
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;

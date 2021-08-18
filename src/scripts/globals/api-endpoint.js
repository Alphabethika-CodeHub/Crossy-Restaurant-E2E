import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANTS: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  RESTAURANTS_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
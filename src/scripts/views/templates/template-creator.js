import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => {
  function truncateString(str, num) {
    if (str.length > num) {
      return `${str.slice(0, num)}...`;
    }
    return str;
  }

  return `    
    <div id="restaurant_content_id" class="res-item">
        <a href="#/detail/${restaurant.id}" class="catch_name">${restaurant.name}</a>
        <a tabindex="0" href="#/detail/${restaurant.id}">
            <article tabindex="-1">
                <div class="res-item__header">
                    <img class="res-item__header__poster lazyload" alt="${restaurant.name}"
                        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
                    <div class="res-item__header__rating">
                        <p>🍽️<span class="res-item__header__rating__score">${restaurant.name}</span></p>
                    </div>
                </div>
                <div class="res-item__content">
                    <p>Description</p>
                    <hr>
                    ${truncateString(restaurant.description, 100)}
                </div>
                <div class="res-item__content">
                    <p>Rating:⭐ <strong>${restaurant.rating}</strong></p>
                    <p>City:🏙️ <strong>${restaurant.city}</strong></p>
                </div>
            </article>
        </a>
    </div>`;
};

const createRestaurantDetailTemplate = (detail) => `
    <p>Detail Restaurant</p>
    <hr>
    <h2 class="res__title">${detail.name}</h2>
    <img class="res__poster" src="${CONFIG.BASE_IMAGE_URL + detail.pictureId}" alt="${detail.name}" />
    <div class="res__info">
        <h4>Place</h4>
        <hr>
        <p class="res__name">${detail.address}</p>
        <h4>City</h4>
        <hr>
        <p>🏙️ ${detail.city}</p>
        <h4>Rating</h4>
        <hr>
        <p>⭐ ${detail.rating}</p>
        <h4>Description</h4>
        <hr>
        <p>${detail.description}</p>
    </div>
    <div class="res__category">
        <h3>Dish Categories</h3>
        <hr>
        <span>
            <ul>${detail.categories.map((cat) => `<li>${cat.name}</li>`).join('')}</ul>
        </span>
    </div>
    <div class="res__menu">
        <section>
            <h3>Foods Menu</h3>
            <hr>
            <span>
                <ul>${detail.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul>
            </span>
        </section>
        <section>
            <h3>Drinks Menu</h3>
            <hr>
            <span>
                <ul>${detail.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul>
            </span>
        </section>
    </div>

    <p><strong>Reviews</strong></p>
    <hr>

    <div class="res__customer__review">
        ${detail.customerReviews.map((reviewer) => `
            <section class="card__customer__review">
            <div class="card__review__header">
                <p><i class="fas fa-user"></i> ${reviewer.name}</p>
                <p>${reviewer.date}</p>
                <hr>
                <p>${reviewer.review}</p>
            </div>
            </section>
        `).join('')}
    </div>`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

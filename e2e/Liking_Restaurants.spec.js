const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('#/like');
});

const firstCondition = 'Kamu Belum Menyukai Satu Restaurant Pun';

Scenario('Showing Empty Favourite Restaurants', (I) => {
  I.seeElement('#res_container');
  I.see(firstCondition, '#res_container');
});

Scenario('Liking One Restaurant', async (I) => {
  I.see(firstCondition, '#res_container');

  I.amOnPage('/');

  I.seeElement('a');
  const firstCard = locate('.res-item__header__poster').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/like');
  I.seeElement('a');
  const likedCardTitle = await I.grabTextFrom('.res-item__header__poster');

  assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('Unliking One Restaurant', async (I) => {
  I.see(firstCondition, '#res_container');

  I.amOnPage('/');

  I.seeElement('#restaurant_content_id a');
  const firstCard = locate('.catch_name').first();
  const firstCardTitle = await I.grabTextFrom(firstCard);
  I.click(firstCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#restaurant_content_id');
  // const secCard = locate('.catch_name').first();
  const likedCardTitle = await I.grabTextFrom('.catch_name');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#res_container');
  const noFavRestaurant = await I.grabTextFrom('#res_container');

  assert.strictEqual(noFavRestaurant, firstCondition);
});

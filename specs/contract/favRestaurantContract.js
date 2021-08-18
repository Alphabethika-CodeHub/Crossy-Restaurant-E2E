const itActsAsFavoriteRestaurantModel = (favoriteRestaurantData) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurantData.putFood({ id: 1 });
    favoriteRestaurantData.putFood({ id: 2 });

    expect(await favoriteRestaurantData.getFood(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurantData.getFood(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurantData.getFood(3)).toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurantData.putFood({ aProperty: 'property' });

    expect(await favoriteRestaurantData.getAllFoods()).toEqual([]);
  });

  it('can return all of the Restaurants that have been added', async () => {
    favoriteRestaurantData.putFood({ id: 1 });
    favoriteRestaurantData.putFood({ id: 2 });

    expect(await favoriteRestaurantData.getAllFoods()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite Restaurant', async () => {
    favoriteRestaurantData.putFood({ id: 1 });
    favoriteRestaurantData.putFood({ id: 2 });
    favoriteRestaurantData.putFood({ id: 3 });

    await favoriteRestaurantData.deleteFood(1);

    expect(await favoriteRestaurantData.getAllFoods()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    favoriteRestaurantData.putFood({ id: 1 });
    favoriteRestaurantData.putFood({ id: 2 });
    favoriteRestaurantData.putFood({ id: 3 });

    await favoriteRestaurantData.deleteFood(4);

    expect(await favoriteRestaurantData.getAllFoods()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };

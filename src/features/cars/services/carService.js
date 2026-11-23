import { CARS_DATA } from '@/data/carsData';

/**
 * Retrieves all vehicles from the fleet.
 * @returns {Promise<Array>}
 */
export async function getAllCars() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([...CARS_DATA]);
    }, 150);
  });
}

/**
 * Retrieves featured highlight vehicles for homepage presentation.
 * @param {number} [limit=6] Optional maximum number of featured cars to return.
 * @returns {Promise<Array>}
 */
export async function getFeaturedCars(limit = 6) {
  return new Promise(resolve => {
    setTimeout(() => {
      const featured = CARS_DATA.filter(car => car.featured);
      resolve(limit ? featured.slice(0, limit) : featured);
    }, 150);
  });
}

/**
 * Retrieves a single vehicle by its unique slug/id.
 * @param {string} id
 * @returns {Promise<Object|null>}
 */
export async function getCarById(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const match = CARS_DATA.find(car => car.id === id);
      resolve(match ? { ...match } : null);
    }, 150);
  });
}

/**
 * Filters fleet by category name.
 * @param {string} category
 * @returns {Promise<Array>}
 */
export async function getCarsByCategory(category) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (!category || category === 'All' || category === 'all') {
        resolve([...CARS_DATA]);
      } else {
        resolve(
          CARS_DATA.filter(car => car.category.toLowerCase() === category.toLowerCase())
        );
      }
    }, 150);
  });
}

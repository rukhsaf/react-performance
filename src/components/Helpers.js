import products from '../mocks/products.json';

const allBrands = ['All Brands', ...new Set(products.map(product => product.brand))];
const allTitle = ['All Titles', ...new Set(products.map(product => product.title))];
const minPrice = Math.min(...products.map(item => item.price));
const maxPrice = Math.max(...products.map(item => item.price));

export { allBrands, minPrice, maxPrice, allTitle };

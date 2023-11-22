
export const filter = ({ products, selectedBrand, sliderValue, search }) =>

  products
    .filter(product =>
      (selectedBrand === 'All Brands' || product.brand === selectedBrand)
      && (product.price >= sliderValue[0])

      && (product.price <= sliderValue[1])
      && (product.title.includes(search)));

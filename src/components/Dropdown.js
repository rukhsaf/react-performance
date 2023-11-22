import React from 'react';

export const Dropdown = ({ allBrands, handleBrandChange, selectedBrand }) => (
  <div>
    <label htmlFor="BrandDropdown">Select Brands: </label>
    <select id="BrandDropdown" onChange={handleBrandChange} value={selectedBrand}>
      {allBrands.map(brands => (
        <option key={brands} value={brands}>
          {brands}
        </option>
      ))}
    </select>

  </div>
);

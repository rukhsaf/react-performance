import React, { useState } from 'react';
import { Dropdown } from './Dropdown';
import { allBrands, minPrice, maxPrice } from './Helpers';
import { TableComponent } from './Table';
import Slider from '@mui/material/Slider';
import products from '../mocks/products.json';
import { filter } from '../filter';
import { SearchBox } from './Search';

export const ProductList = () => {
  // const [selectedBrand, setSelectedBrand] = useState('All Brands');
  // const [sliderValue, setSliderValue] = useState([0, 100]);
  // const [search, setSearch] = useState([]);
  const [state, setState] = useState({
    selectedBrand: 'All Brands',
    sliderValue: [0, 100],
    search: [],
  });

  const patchState = newState => {
    setState(oldState => ({ ...oldState, ...newState }));
  };

  const handleBrandChange = event => {
    patchState({ selectedBrand: event.target.value });
  };
  const handleSliderChange = (event, newRange) => {
    patchState({ sliderValue: newRange });
  };
  const filteredData = (filter({ products, ...state }));

  console.log(filteredData);
  return (
    <div >
      <Dropdown
        allBrands={allBrands}
        handleBrandChange={handleBrandChange}
        selectedBrand={state.selectedBrand}/>
      <br></br>
      <Slider
        value={state.sliderValue}
        min={minPrice}
        max={maxPrice}
        step={1}
        onChange={handleSliderChange}
        style={{ width: '400px' }}
      />

      <SearchBox
        search={state.search}
        patchState={patchState}
        products={products}
      />

      <TableComponent filteredData={filteredData}/>

    </div>
  );
};

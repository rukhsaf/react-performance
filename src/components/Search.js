import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const SearchBox = ({ search, patchState, products }) => {
  console.log(search);
  return (
    <div>
      <Autocomplete
        Style={{ width: 400 }}
        autoComplete
        autoHighlight
        freeSolo
        options={products}
        getOptionLabel={option => option.title}
        renderInput={products => (
          <TextField
            {...products}
            variant="outlined"
            label="Search Box"
            key={products.id}
            onChange={({ target }) => patchState({ search: target.value })}
          />
        )}
      />

    </div>
  );
};

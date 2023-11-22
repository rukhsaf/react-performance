import React from 'react';
import { Link } from 'react-router-dom';
import { Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button } from '@mui/material';

export const TableComponent = ({ filteredData }) => {
  const buttonClick = () => {
    filteredData.forEach(product => {
      // if(!product.images[1])
      console.log(product);
    });
  };

  return <>
    <Button onClick={buttonClick} >Click Here</Button>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>

          <TableRow>
            {['Product_Id',
              'Product_Title',
              'Product_Price',
              'Product_Brand',
              'Description']
              .map(headings => <TableCell align="right">{headings}</TableCell>)}

          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData
            .map(({ id, title, price, brand }) => (

              <TableRow>
                {[
                  id,
                  title,
                  price,
                  brand,
                ]
                  .map(property => <TableCell align="right">{property}</TableCell>)}
                <TableCell align="right">
                  <Link to={`/productdescription/${ id }`}>
                    link
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

  </>;
};

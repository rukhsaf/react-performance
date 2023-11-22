import React from 'react';
import { Card, CardActionArea, Typography, CardMedia, CardContent } from '@mui/material';
import products from '../mocks/products.json';
import { useParams } from 'react-router-dom';

export const ProductDesription = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === Number(productId));

  if(!product)
    return <div>Product not found</div>;
  return (
    <Card sx={{ maxWidth: 500 }}>

      <CardActionArea key ={product.title}>
        <CardMedia
          component="img"
          alt={product.title}
          height="200"
          image={product.thumbnail}
        />
        <CardContent>
          <Typography variant ="h6" >
            {product.title}
          </Typography>
          <Typography variant ="subtitle1" >
            {product.category}
          </Typography>
          <Typography variant ="subtitle1" >
           Price: {product.price}
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
  );
};

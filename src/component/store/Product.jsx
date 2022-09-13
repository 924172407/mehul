import { Box, Stack, Card, Divider, Typography, Chip, Paper, CardMedia, CardActionArea, CardContent, Fab } from '@mui/material'
import React from 'react';
import styled from '@emotion/styled';
import { AddToDrive, Share } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { AddIcon } from '@mui/icons-material';

const Product = () => {
    return (
        <Card sx={{ maxWidth: '225px', margin: '12px', maxHeigh: '300px', minHeight: '100', boxShadow: '1px 1px 1px 1px' }}>

            <CardActionArea>
                <CardContent>
                    <Typography variant='subtitle1' color={'secondary.main'} align='center'>Product Title</Typography>
                </CardContent>
            </CardActionArea>

            <CardMedia
                component="img"
                height="250"
                image="https://dummyjson.com/image/i/products/1/3.jpg"
                alt="green iguana"
            />
          
            <CardContent>
                <Typography variant='subtitle1'>
                    Product Price
                </Typography>
            </CardContent>
          


        </Card>

    )
}

export default Product

// <div style={{ backgroundColor: 'primary.main' }} height={'50px'}>
// <Icons>
//     <Share sx={{ color: 'success.main', marginLeft: '10px', marginRight: '10px' }} />

//     <AddShoppingCartIcon sx={{ color: 'success.main', marginLeft: '10px', marginRight: '10px' }} />
// </Icons>
// </div>
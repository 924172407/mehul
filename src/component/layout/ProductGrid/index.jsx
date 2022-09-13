import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Product from '../../store/Product'
import axios from 'axios';

const Productgrid = () => {
    const [data, setData] = useState([]);
    const loadProduct = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setData(response.data.products);
            console.log(response.data.products);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        loadProduct();
    }, []);

    return (
        <Box container sx={{ marginBottom: '25px',marginTop:'10px' }} zIndex='0'>
            <Grid spacing={2} sx={{ flexFlow: 'wrap', display: 'flex', flexGrow: 1 }}>
                {
                    data.map(item => {

                        return (
                            <Grid sm={12} xs={12} md={6} lg={6} key={item.id}>
                                <Product />
                            </Grid>
                        )
                    })

                }
            </Grid>
        </Box>
    )
}
export default Productgrid
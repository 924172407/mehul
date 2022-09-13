import { Grid, Box, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Subtitles } from '@mui/icons-material';

export const item = styled('h4')({
    textAlign: 'center',
    color: 'success.main',
    textDecoration: 'none',
    marginTop: '10px',
    paddingTop: '10px',
    fontWeight: 'bold',
});
export const Heading = styled('h2')({
    padding: '10px 15px 15px 10px',
    margin: '5px 3px 5px 10px',
    alignItems: 'center'
});

export const Title = styled('h3')({
    margin: '5px 3px 5px 3px',
    padding: '10px 5px 10px 5px',
    alignItems: 'center',
    fontWeight: 'bolder',
    color: 'primary.main',
})
export const Subtitle = styled('h6')({
    fontWeight: 'normal',
    fontSize: 16,
    margin: '10px',
    justifyContent: 'normal'


})
const Footer = () => {
    return (
        <Box sx={{ position: 'relative', borderStyle: 'none', bottom: 0, left: 0, right: 0, height: 'auto', minHeight: '150px', bgcolor: 'primary.main', boxShadow: '0px 2px 4px 7px #c1c7c2', borderColor: 'none' }} zIndex='1'>
            <Grid container spacing={2} p='10px' sx={{ flexFlow: 'wrap', display: 'flex', alignContent: 'center', flexGrow: '1' }}>
                <Grid item xs={12} sm={6} lg={3} md={3} >
                    <Heading>
                        ATFashion
                    </Heading>
                    <Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunts cilisis.
                    </Subtitle>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Title>
                        Quick Links
                    </Title>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Title>
                        Account
                    </Title>
                </Grid>
                <Grid item xs={12} sm={6} lg={3} md={3}>
                    <Title>
                        News Letter
                    </Title>
                </Grid>
            </Grid>
        </Box>
    )
}
export default Footer

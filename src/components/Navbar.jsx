import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { SearchBar } from './index';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            p={2}
            sx={{
                position: 'sticky', background: '#000', top: 0,
                justifyContent: 'space-between'
            }}>
            <Link to='/' style={{
                display: 'flex', alignItems: 'center'
            }}>
                <img src={Logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default Navbar
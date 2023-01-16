import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './index'
import { fetchData } from '../utils/fetchData'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchData(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items));
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white', textTransform: 'capitalize' }}>
                Search Results for:
                <span style={{ color: '#F31503', marginLeft: '5px' }}>{searchTerm} </span>Videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index';
import { fetchData } from '../utils/fetchData';

const ChannelDetail = () => {

    const { id } = useParams();

    const [channelDetails, setChannelDetails] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        fetchData(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetails(data?.items[0]));

        fetchData(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data.items));

    }, []);
    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg,rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%)',
                    zIndex: 10,
                    height: '300px'
                }} />
                <ChannelCard channelDetail={channelDetails} marginTop="-90px" />
            </Box>
            <Box display="flex" p="2" >
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}

export default ChannelDetail
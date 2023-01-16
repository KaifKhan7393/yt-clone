import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Videos } from './index';
import { fetchData } from '../utils/fetchData';

const VideoDetail = () => {

    const [videoDetails, setVideoDetails] = useState(null);
    const [relatedVideos, setrelatedVideos] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        fetchData(`videos?part=snippet,statistics&id=${id}`).then((data) => {
            setVideoDetails(data.items[0]);
        })
        fetchData(`search?part=sinppet&relatedToVideoId=${id}&type=video`).then((data) => {
            setrelatedVideos(data.items);
        })
    }, [id]);
    if (!videoDetails) return "Loading....";

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetails;
    return (
        <Box minHeight="95vh" className='space'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', m: '50px auto' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent='space-between' sx={{
                            color: '#fff'
                        }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant='h5' color='#fff' display='flex' alignItems='center'>
                                    {channelTitle}
                                    <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box px={2} py={{ md: 1, sx: 5 }} sx={{ m: '40px 0' }} justifyContent='center' alignItems='center'>
                    <Videos videos={relatedVideos} direction='column' />
                </Box>
            </Stack >
        </Box >
    )
}

export default VideoDetail
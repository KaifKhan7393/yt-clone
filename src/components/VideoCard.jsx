import { Link, useParams } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { md: '300px', xs: '100%' }, boxShadow: 'none', border: '0', borderRadius: '10px' }}>
            <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '105px' }}>
                <Link to={videoId ? `/video${videoId}` : null}>
                    <Typography variant='subtitle1' color='#fff' sx={{ fontWeight: 'bold' }}>
                        {snippet?.title.slice(0, 60) || null}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : '/channel/UCuMo0RRtnNDuMB8DV5stEag'}>
                    <Typography variant='subtitle2' color='gray' sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                        {snippet?.channelTitle.slice(0, 60) || null}
                        <CheckCircleIcon sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard
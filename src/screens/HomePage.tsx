import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IResult, getTopFreeApps, getTopPaidApps } from '../api/service';
import { setTopFree, setTopPaid } from '../store/appsReducer';
import { Box, IconButton, Typography } from '@mui/material';
import { RootState } from '../store/store';
import { HorizontalListItem, VerticalListItem } from '../components';
import { FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';

export default function HomePage() {
    const { topFree, topPaid } = useSelector((state: RootState) => state.apps);
    const dispatch = useDispatch()
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getTopFreeApps().then(res => {
            dispatch(setTopFree(res.feed.results));
        });
        getTopPaidApps().then(res => {
            dispatch(setTopPaid(res.feed.results));

        })
    }, [dispatch]);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    return (
        <Box className="homepage" m={2}>
            <Typography component="h2">Top Free Apps</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={scrollLeft}>
                    <FaArrowCircleLeft size={25}/>
                </IconButton>
                <Box mt={2} className="menu" ref={scrollContainerRef}>
                    {topFree?.map((item: IResult) =>
                        <Box key={item.id} sx={{ display: 'inline-block', marginRight: 2 }}>
                            <HorizontalListItem item={item} />
                        </Box>

                    )}
                </Box>
                <IconButton onClick={scrollRight}>
                    <FaArrowCircleRight size={25} />
                </IconButton>
            </Box>
            <Typography mt={5} component="h2">Top Paid Apps</Typography>
            <Box mt={2}>
                {topPaid?.map((item: IResult) =>
                    <Box key={item.id} sx={{ marginTop: 2 }}>
                        <VerticalListItem item={item} />
                    </Box>

                )}
            </Box>
        </Box>
    );
}

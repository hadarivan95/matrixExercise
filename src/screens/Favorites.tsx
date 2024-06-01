import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IResult } from '../api/service';
import { HorizontalListItem } from '../components';

export default function Favorites() {

    const { favorites } = useSelector((state: RootState) => state.apps);

    return (
        <Box m={2}>
            <Typography component="h2">My Favorites</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexWrap: 'wrap' }}>
                    {favorites?.map((item: IResult) =>
                        <Box key={item.id} sx={{ display: 'inline-block', margin: 1 }}>
                            <HorizontalListItem item={item} />
                        </Box>

                    )}
                </Box>
            </Box>
        </Box>
    );
}

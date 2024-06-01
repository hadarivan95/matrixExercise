import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IResult } from '../api/service';
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../store/appsReducer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgrey',
    ...theme.typography.body2,
    boxShadow:'none',
    padding: theme.spacing(1),
    textAlign: 'center',
    width: 250,
    position:'relative',
    height: 'auto',
}));

export default function HorizontalListItem({ item }: { item: IResult }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.apps.favorites);

    const isFavorite = favorites.some((fav: IResult) => fav.id === item.id);

    const handleFav = () => {
        if (isFavorite) {
            dispatch(removeFavorite(item.id));
        } else {
            dispatch(addFavorite(item));
        }
    };


    return (
        <Item>
            <Box onClick={() => handleFav()} style={{ cursor: 'pointer', position: 'absolute' }}>
                <FaHeart color={isFavorite ? 'red' : 'grey'} size={20} />
            </Box>
            <img alt="img" loading='lazy' src={item.artworkUrl100} />
            <Typography fontSize={16}>{item.name}</Typography>
        </Item>
    );
}

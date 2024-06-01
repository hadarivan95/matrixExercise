import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IResult } from '../api/service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../store/appsReducer';
import { FaHeart } from 'react-icons/fa';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgrey',
    ...theme.typography.body2,
    boxShadow:'none',
    padding: theme.spacing(1),
    textAlign: 'center',
    justifyContent: 'space-between',
    maxWidth:400,
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    height: 50,
}));

export default function VerticalListItem({ item }: { item: IResult }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.apps.favorites);

    const isFavorite = favorites.some((fav : IResult) => fav.id === item.id);

    const handleFav = () => {
        if (isFavorite) {
            dispatch(removeFavorite(item.id));
        } else {
            dispatch(addFavorite(item));
        }
    };

    return (
        <Item>
            <Box sx={{ display: "flex", alignItems: 'center', gap: 1, }}>
                <img alt="img" loading='lazy' width="40" height="40" src={item.artworkUrl100} />
                <Typography fontSize={16}>{item.name}</Typography>
            </Box>
            <Box onClick={() => handleFav()} style={{ cursor: 'pointer' }}>
                <FaHeart color={isFavorite ? 'red' : 'grey'} size={20} />
            </Box>
        </Item>
    );
}

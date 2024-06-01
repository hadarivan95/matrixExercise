import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IResult } from '../api/service';

interface AppsState {
    topFree: IResult[];
    topPaid: IResult[];
    favorites: IResult[];
}
const initialState: AppsState = {
    topFree: [],
    topPaid: [],
    favorites: [],
}

export const AppsSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTopFree: (state, action: PayloadAction<IResult[]>) => {
            state.topFree = action.payload;
        },
        setTopPaid: (state, action: PayloadAction<IResult[]>) => {
            state.topPaid = action.payload;
        },
        addFavorite: (state, action: PayloadAction<IResult>) => {
            if (!state.favorites.find(item => item.id === action.payload.id)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload);
        },
    },
})

export const { setTopFree, setTopPaid, addFavorite, removeFavorite } = AppsSlice.actions

export default AppsSlice.reducer
import { apiRequest } from './api-request';
import { ENDPOINTS } from './urls';

export const getTopFreeApps = async () => {
    try {
        const { data } = await apiRequest().get<GetTopFreeAppsResponse>(ENDPOINTS.GET_TOP_FREE);
        return data;
    } catch (error) {
        console.error('Error fetching top free apps:', error);
        throw error;
    }
};

export const getTopPaidApps = async () => {
    try {
        const { data } = await apiRequest().get<GetTopFreeAppsResponse>(ENDPOINTS.GET_TOP_PAID);
        return data;
    } catch (error) {
        console.error('Error fetching top free apps:', error);
        throw error;
    }
};



export interface IResult {
    id: string;
    name: string;
    artworkUrl100: string;
}

export interface GetTopFreeAppsResponse {
    feed: {
        results: IResult[];
    };
}

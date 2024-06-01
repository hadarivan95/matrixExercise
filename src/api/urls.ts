export const config = {
    BASE_URL: 'https://rss.applemarketingtools.com',
};


export const ENDPOINTS = {
    GET_TOP_FREE: `${config.BASE_URL}/api/v2/us/apps/top-free/10/apps.json`,
    GET_TOP_PAID: `${config.BASE_URL}/api/v2/us/apps/top-paid/25/apps.json`,
};
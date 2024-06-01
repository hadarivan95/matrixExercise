import React from "react";


const HomePage = React.lazy(() => import('../screens/HomePage'))
const Favorites = React.lazy(() => import('../screens/Favorites'))


export const routes = [
    {
        path: "/home",
        component: HomePage,
        title: 'HomePage',
    },
    {
        path: "/favorites",
        component: Favorites,
        title: 'Favorites',
    },
]
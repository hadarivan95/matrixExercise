import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
const HomePage = React.lazy(() => import('./screens/HomePage'))
const Favorites = React.lazy(() => import('./screens/Favorites'))


export default function Layout() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography>AppStore Assignment</Typography>
          <Tabs
            textColor='inherit'
            TabIndicatorProps={{
              style: {
                backgroundColor: "white"
              }
            }}
            value={selectedTab} onChange={handleChange} >
            <Tab label="Home" />
            <Tab label="Favorites" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {selectedTab === 0 ?
        < HomePage /> : <Favorites />
      }
    </div>
  );
}

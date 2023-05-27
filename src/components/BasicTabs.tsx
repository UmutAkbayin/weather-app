'use client';

import type { weatherData } from '@/lib/api/getData';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '@/components/TabPanel'
import Image from 'next/image';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({data} : {data: weatherData[]}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const imageLoader = ({ src } : {src: string}) => {
    return `https://openweathermap.org/img/wn/${src}.png`;
  }

  const date = new Date();
  const month = date.toLocaleString('en-EN', {month: 'long'});
  const day = date.toLocaleString('en-EN', {day: 'numeric'});

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Berlin" {...a11yProps(0)} />
          <Tab label="London" {...a11yProps(1)} />
          <Tab label="New York" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {data.map((item, index) => { 
        return (
          <TabPanel key={item.id} value={value} index={index}>
            <Typography variant='subtitle2'>{month} {day} </Typography>
            <Image
                loader={imageLoader}
                src={item.icon}
                width={50}
                height={50}
                alt='weather status icon'
                style={{ display: 'inline-block'}}
            />
            <Typography component='span' >{item.temp.toFixed(2)}° C</Typography>
            <Typography>{item.description} with {item.humidity}% humidity and {item.windspeed}m/s E wind speed</Typography>
          </TabPanel>
        )
      })}
    </Box>
  );
}
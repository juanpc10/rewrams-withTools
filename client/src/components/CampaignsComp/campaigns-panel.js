import React, {useState, useContext, useEffect } from 'react';
import './campaigns-panel.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



import { GlobalContext } from '../../context/globalState';
import ApiClient from '../../context/ApiClient';

import { Discount } from './values/discount';
import { MaxDiscount } from './values/max-discount';
import { FormCumulative } from './forms/form-cumulative';
import { FormInstant } from './forms/form-instant';





export default function AdminPanel(user)  {

  const username = user.username;
  const { addSingleEvent } = useContext(GlobalContext);
  const { items } = useContext(GlobalContext);

  const classes = useStyles();

  let initialState;
  let cumulative = {};
  let instant = {}; // eslint-disable-next-line
  items.map (item => { // eslint-disable-next-line
    if (item.type === 'cumulative')  {
      if (item.active === true) initialState = 0; 
      cumulative = item;
    } else if (item.type === 'instant') {   // eslint-disable-next-line
      if (item.active === true) initialState = 1; 
      instant = item;
    }  // eslint-disable-next-line
  });


  const [value, setValue] = useState(initialState);



  useEffect(() => {
    ApiClient.getAllCoupons(username)
    .then(data => data.map(item => addSingleEvent(item))); // eslint-disable-next-line
  }, []);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className ='tabs' value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab className='tab' label="Cumulative coupons" {...a11yProps(0)} />
          <Tab className='tab' label="Instant discount" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

       
      <TabPanel value={value} index={0}>
        <div className='tabpanel-container0'>
          <div className='left-side-form'>

            <FormCumulative nameuser={username} />

          </div>
          <div className='right-side-values'>
            { <Discount discount={cumulative.discount} /> }
            <div id="cumulative-maxdisc-value-margin-top">
              { <MaxDiscount maxDiscount={cumulative.maxDiscount} /> }
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className='tabpanel-container1'>
          <div className='left-side-form'>

            <FormInstant nameuser={username} />

          </div>
          <div className='right-side-values'>
            { <Discount discount={instant.discount} /> }
          </div>
        </div>
      </TabPanel>
    </div>
  );
}















function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));



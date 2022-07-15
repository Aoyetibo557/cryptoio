import React from 'react';
import "./Card.css"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
        className='loginCard__tabpanel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 7 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function LoginCard({coinSymbol}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <Box className='loginCard'  >
            <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                <Tabs
                    className='loginCard__tabs'
                    value={value}
                    onChange={handleChange}
                    aria-label="Login Card Tabs"
                >
                    <Tab className="loginCard__tab" label="Login" {...a11yProps(0)}/>
                    <Tab className="loginCard__tab" label="Sell" {...a11yProps(1)}/>
                </Tabs>
            </Box>

            <TabPanel  value={value} index={0}>
                Ready to buy {coinSymbol} ?
                <Button color='primary' label="Create Account" url={"/onboarding/login"}  />
                or 
                <Link className='loginCard____tabpanel__link' to="/onboarding/login"> Log in </Link>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Ready to buy {coinSymbol} ?
                <Button color='primary' label="Create Account" url={"/onboarding/login"}  />
                or 
                <Link className='loginCard____tabpanel__link' to="/onboarding/login"> Log in </Link>
            </TabPanel>
            
        </Box>
    );
}

export default LoginCard
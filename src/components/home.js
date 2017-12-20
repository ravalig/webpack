import React from 'react';
import Menu from './menu';
import GatorNavbar from './gatorNavbar';

const home = ({ children }) => {
  return (
    <div>
    	<GatorNavbar />
      <Menu />
      {children}
    </div>
  );
};

export default home;

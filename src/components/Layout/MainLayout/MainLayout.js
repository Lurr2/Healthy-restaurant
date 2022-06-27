import React from 'react'
import NavigationBar from '../../Navigation/NavigationBar';

const MainLayout = ({ children }) => (
  <section>
    <NavigationBar />
    {children}
  </section>
);

export default MainLayout;
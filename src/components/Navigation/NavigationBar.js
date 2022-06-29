import { FaLeaf } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

import classes from './NavigationBar.module.scss';

const NavigationBar = () => {
  return (
    <header className={classes.navigation_bar}>
      <div className={classes.logo}><FaLeaf/> Healthup</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/' className={navData => navData.isActive ? classes.active : '' }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu' className={navData => navData.isActive ? classes.active : '' }>
              Menu 
            </NavLink>
          </li>
          <li>
            <NavLink to='/promos' className={navData => navData.isActive ? classes.active : '' }>
              Promos
            </NavLink>
          </li>
          <li>
            <NavLink to='/order' className={navData => navData.isActive ? classes.active : '' }>
              Order
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
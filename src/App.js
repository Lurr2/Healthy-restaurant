import { Fragment } from "react"; 
import Header from "./components/Layout/Header";
import PopularMenu from "./components/Layout/PopularMenu";
import NavigationBar from "./components/Navigation/NavigationBar";
import Promo from "./components/Layout/Promo";
import './css/base.module.scss';
import Order from "./components/Order/Order";



function App() {
  return (
    <Fragment>
      <NavigationBar/>
      <Header/>
      <PopularMenu/>
      <Promo/>
      <Order/>
    </Fragment>
  );
}

export default App;

import { Fragment } from "react"; 
import Header from "./components/Layout/Header";
import PopularMenu from "./components/Layout/PopularMenu";
import NavigationBar from "./components/Navigation/NavigationBar";
import './css/base.module.scss';


function App() {
  return (
    <Fragment>
      <NavigationBar/>
      <Header/>
      <PopularMenu/>
    </Fragment>
  );
}

export default App;

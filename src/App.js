import { Fragment } from "react"; 
import Header from "./components/Layout/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
import './css/base.module.scss';
import './css/variables.module.scss';

function App() {
  return (
    <Fragment>
      <NavigationBar/>
      <Header/>
    </Fragment>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

import './css/base.module.scss';

import MainLayout from './components/Layout/MainLayout/MainLayout';
import Menu from './components/Pages/Menu/Menu';
import Promos from './components/Pages/Promos/Promos';
import OrderPage from './components/Pages/OrderPage/OrderPage';



function App() {
  return (
    <Router basename='/'>
      <MainLayout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/promos' element={<Promos/>} />
          <Route path='/order' element={<OrderPage />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
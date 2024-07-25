import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ItemView from './Pages/ItemView';
import BagPage from './Pages/BagPage';
import Checkout from './Pages/Checkout';
import './App.css';
import Address from './Pages/AddAddress';
import Payment from './Pages/AddPayment';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/item-view" element={<ItemView />} />
      <Route path="/bag-page" element={<BagPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
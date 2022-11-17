import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../error/ErrorPage';
import LoginPage from '../login/LoginPage';
import OrderPage from '../order/OrderPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order/:name' element={<OrderPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

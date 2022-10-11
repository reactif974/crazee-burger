import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/OrderPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order/:name' element={<OrderPage/>} />
      </Routes>
    </div>
  );
}

export default App;

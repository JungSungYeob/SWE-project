import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login/Login'
import Join from './pages/auth/join/Join'
import CoinPrice from './pages/market/coinPrice/coinPrice';
import MarketTrend from './pages/market/marketTrend/marketTrend';
import Board from './pages/market/board/board';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={< Login />} />
        <Route path="/join" element={< Join />} />
        <Route path="/coinprice" element={< CoinPrice />} />
        <Route path="/markettrend" element={< MarketTrend />} />
        <Route path="/board" element={< Board />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

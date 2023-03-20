import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Calculators from './pages/Calculator/Calculator';
import Home from './pages/Home/Home';
import Quote from './pages/Quote/Quote';
import Header from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" className="links border" exact element={<Home />} />
      <Route path="/calculator" className="links border" exact element={<Calculators />} />
      <Route path="/quote" className="links" exact element={<Quote />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;

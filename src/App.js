import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddExpense from './pages/add-expense';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;

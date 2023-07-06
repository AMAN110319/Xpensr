import React from 'react'
import './home.css'
import TopFold from '../../components/topfold';
import ExpenseList from '../../components/expenselist';
const Home = () => {
  return (
    <div className='home'>
      <TopFold/>
      <ExpenseList/>
    </div>
  )
}

export default Home;

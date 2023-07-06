import React from 'react'
import './expenselist.css'
import Card from './card';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ExpenseList = () => { 
  const {expenseList: list,query}=useSelector(state=>state.expenses)
  const filteredList = list.filter(item=>item.title.includes(query));
  const notifySuccess=()=>toast.success("Expense Deleted")
  return (
    <div className='expense-list'>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {list.length?list.map(item=>(
        <Card item={item} notifySuccess={notifySuccess} /> 
      )):
      <div className='empty-state'>
        <img src="https://png.pngtree.com/png-vector/20210114/ourmid/pngtree-know-nothing-of-virus-corona-png-image_2739403.jpg" alt='emty-list' className='empty-image'/>
        
        <label>UH OH! your expense list is empty</label>
        </div>}
    </div>
  )
}

export default ExpenseList;

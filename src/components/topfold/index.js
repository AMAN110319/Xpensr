import React, { useState } from 'react'
import './topfold.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';
const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch=useDispatch()
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  }
  return (
    <div className='topfold'>
      {window.location.pathname === '/' ? <div className='home-topfold'>
        <div className='searchBar'>
          <input placeholder='Search for expenses' value={query} onChange={(e) => handleQuery(e)}></input>
          <i class="fi fi-br-search"></i>
        </div>
        <Link to='/add-expense'>
        <div className='add-button'>
          <i className="fi fi-sr-add"></i>
          Add
        </div>
        </Link>
      </div> :
        <div className='add-topfold'>
          <Link to="/">
          <div className='add-topfold-button'>
            <i class="fi fi-br-angle-double-left"></i>
            <label>Back</label>
          </div>
          </Link> 

          <div className='add-topfold-button'>
            <i class="fi fi-rr-cross-circle"></i>
            <label>Cancel</label>
          </div>
        </div>
      }

    </div>
  )
}

export default TopFold

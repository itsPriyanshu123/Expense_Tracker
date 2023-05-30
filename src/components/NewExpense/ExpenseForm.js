import { useState } from 'react';
import './ExpenseForm.css'
export default function ExpenseForm(props){
    const[enterdTitle,setTtitle]=useState('')
    const[enterdAmount,setAmount]=useState('')
    const[enterdDate,setDate]=useState('')

    const titleHandler=(event)=>{
        setTtitle(event.target.value)
        
    }
    const amountHandler=(event)=>{setAmount(event.target.value)}
    const dateHandler=(event)=>{setDate(event.target.value)}

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enterdTitle,
            amount:enterdAmount,
            date:new Date(enterdDate)

        };
        props.onSaveExpense(expenseData);
        setTtitle('');
        setDate('');
        setTtitle('');
       
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text"  value={enterdTitle}onChange={titleHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min='0.01' step='0.01' value={enterdAmount} onChange={amountHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min='2019-01-01' max='2022-12-31' value={enterdDate} onChange={dateHandler}/>
                    </div>

                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    );
}
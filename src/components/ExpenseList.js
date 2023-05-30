import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItems from "./ExpenseItems";
import './Expenses.css'
export default function ExpenseList(props){
    const [filterdYear,setFilterdYear]=useState('2020')
    const expenses=props.expenses
    const filterChangeHandler=(selectedYear)=>{
        console.log(selectedYear);
    }
    return(
        <div className="expenses">
        <ExpensesFilter  selected={filterdYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </div>
    );
}
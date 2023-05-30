import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
export default function NewExpense(porps){

    const saveExpenseHandler=(enterdExpenseData)=>{
        const expenseData={
            ...enterdExpenseData,
            id:Math.random().toString()
        }   
        console.log(expenseData)
        porps.onAddExpenseData(enterdExpenseData);
    }


    return(
        <div className='new-expense'>
            {/* parent to child communication  */}
            <ExpenseForm onSaveExpense={saveExpenseHandler}/>
        </div>
    );

}
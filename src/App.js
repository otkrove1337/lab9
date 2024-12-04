import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

const INITIAL_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
  { id: 'e5', title: 'Laptop', amount: 1200, date: new Date(2022, 3, 8) },
  { id: 'e6', title: 'Groceries', amount: 300, date: new Date(2019, 6, 20) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <h2 class='title'>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

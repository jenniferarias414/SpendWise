import React from 'react';

import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const sortedExpenses = props.items.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sortedExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {sortedExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
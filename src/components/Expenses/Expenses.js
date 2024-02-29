import React, {useState} from 'react';

import './Expenses.css'
import Card from '../UI/Card.js'
import ExpensesFilter from "./ExpensesFilter.js";
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2024');

  // let filterInfoText = '2019, 2021 & 2022';

  // if (filteredYear === '2019'){
  //   filterInfoText = '2020, 2021 & 2022'
  // } else if (filteredYear === '2021'){
  //   filterInfoText = '2019, 2020 & 2022'
  // } else {
  //   filterInfoText = '2019, 2020 & 2021'
  // }; //  derived/computed state, depends on the state that's changed

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return new Date(expense.date).getFullYear().toString() === filteredYear
  });

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses} />
          {/* <p>Data for years {filterInfoText} is hidden.</p> */}

          {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
          {filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))} */}
          <ExpensesList items={filteredExpenses} />

          {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          ></ExpenseItem> */}
        </Card>
      </div>
    );
};


export default Expenses;
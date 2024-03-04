//'root' component, top of the component tree
import React, {useState, useEffect, useContext} from 'react';
import NewExpense from './components/NewExpense/NewExpense.js';
import Expenses from './components/Expenses/Expenses.js';
import Header from './components/Header.js';
import AuthContext from './store/AuthContext.js';
import axios from 'axios';

// const DUMMY_EXPENSES = [
//     {
//       id: 'e1',
//       title: 'Pepper Spray',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', 
//       title: 'New TV', 
//       amount: 799.49, 
//       date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];


function App() {
  const {state} = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  // const titleRef = useRef();
  // const amountRef = useRef();
  // const dateRef = useRef();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('/expenses/' + state.userId);
      const data = await response.json();
      console.log(data)
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const addExpenseHandler = (values) => {
    // e.preventDefault();
    // let body = {
    //   title: titleRef.current.value,
    //   amount: amountRef.current.value,
    //   date: dateRef.current.value,
    // };
values.userId= state.userId  
delete values.id  

axios
      .post('/expenses', values)
      .then((res) => {
      console.log(res.data);
      setExpenses((prevExpenses) => [res.data, ...prevExpenses]);
    })
    .catch((error) => {
      console.error(error);
    });

    
  };
  //   setExpenses(prevExpenses => {
  //     return [expense, ...prevExpenses];
  //   });
  // };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Let/s get started!'),
  //   React.createElement(Expenses, {items: expenses})
  // );    *this is alternative to JSX return*

  return (
    <div>
      <Header />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

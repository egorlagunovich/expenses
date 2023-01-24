import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NexExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Penalty",
    amount: "2222",
    date: new Date(2022, 7, 12),
    id: 1,
  },
  {
    title: "Present for love",
    amount: "198",
    date: new Date(2021, 3, 11),
    id: 2,
  },
  {
    title: "New ball",
    amount: "123",
    date: new Date(2020, 2, 10),
    id: 3,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;

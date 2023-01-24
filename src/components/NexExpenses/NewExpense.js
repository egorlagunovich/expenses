import React, { useState } from "react";
import ExpenseButton from "./ExpenseButton";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [buttonClicked, setButtonClick] = useState(false);
  const onButtonChange = (value) => {
    setButtonClick(value);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!buttonClicked ? (
        <ExpenseButton onButtonChange={onButtonChange} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onButtonChange={onButtonChange}
        />
      )}
    </div>
  );
}

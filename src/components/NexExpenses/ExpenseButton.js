import React from "react";

export default function ExpenseButton(props) {
  const onButtonClicked = () => {
    props.onButtonChange(true);
  };
  return (
    <div>
      <button onClick={onButtonClicked}>Add New Expense</button>
    </div>
  );
}

import { useState } from "react";
import ExpenceList from "../components/expence-tracker/ExpenseList";
import GoHomeButton from "../components/GoHome/GoHome";

const ExpenseTrackerPage = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Prod1", amount: 10, category: "Utilities" },
    { id: 2, description: "Prod2", amount: 10, category: "Utilities" },
    { id: 3, description: "Prod3", amount: 10, category: "Other" },
    { id: 4, description: "Prod4", amount: 10, category: "Utilities" },
  ])

  const handleDelete = (id: number) => setExpenses(expenses.filter(e => e.id !== id))


  return (
    <div>
      <ExpenceList 
        expenses={expenses} 
        onDelete={ handleDelete } />
 
      <GoHomeButton />
    </div>
  );
};

export default ExpenseTrackerPage;

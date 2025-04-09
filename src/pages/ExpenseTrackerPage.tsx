import { useState } from "react";
import ExpenceList from "../components/expence-tracker/ExpenseList";
import GoHomeButton from "../components/GoHome/GoHome";
import ExpenceFilter from "../components/expence-tracker/ExpenceFilter";

const ExpenseTrackerPage = () => {

  const [selectedCat, setSelectedCat] = useState('')

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Prod1", amount: 10, category: "Utilities" },
    { id: 2, description: "Prod2", amount: 10, category: "Utilities" },
    { id: 3, description: "Prod3", amount: 10, category: "Other" },
    { id: 4, description: "Prod4", amount: 10, category: "Utilities" },
  ])

  const handleDelete = (id: number) => setExpenses(expenses.filter(e => e.id !== id))

  const visibleExpenses = selectedCat
    ? expenses.filter((e) => e.category === selectedCat)
    : expenses

  return (
    <div>

      <div className="mb-3">
        <ExpenceFilter onSelectCategory={(category) => setSelectedCat(category)}/>
      </div>

      <ExpenceList 
        expenses={visibleExpenses}  
        onDelete={ handleDelete } />
 
      <GoHomeButton />
    </div>
  );
};

export default ExpenseTrackerPage;

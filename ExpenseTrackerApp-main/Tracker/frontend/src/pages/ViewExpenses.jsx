import { useEffect, useState } from "react";
import api from "../services/api";
import ExpenseList from "../components/ExpenseList";

function ViewExpenses() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses:", err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      await api.delete(`/expenses/${id}`);
      fetchExpenses();
    } catch (err) {
      console.error("Error deleting expense:", err);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>All Expenses</h2>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default ViewExpenses;

import { useNavigate } from "react-router-dom";
import api from "../services/api";
import ExpenseForm from "../components/ExpenseForm";

function AddExpense() {
  const navigate = useNavigate();

  const handleSubmit = async (expense) => {
    try {
      await api.post("/expenses", expense);
      navigate("/view");
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  return (
    <div>
      <h2>Add New Expense</h2>
      <ExpenseForm onSubmit={handleSubmit} />
    </div>
  );
}

export default AddExpense;

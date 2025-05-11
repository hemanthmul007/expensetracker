import { useState } from "react";

function ExpenseForm({ onSubmit }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(expense);
    setExpense({ title: "", amount: "", category: "", date: "" }); // clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={expense.title}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={expense.category}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default ExpenseForm;

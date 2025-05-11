function ExpenseList({ expenses, onDelete }) {
  return (
    <ul>
      {expenses.map((exp) => (
        <li key={exp.id}>
          <strong>{exp.title}</strong> - ₹{exp.amount} | {exp.category} | {exp.date}
          <button onClick={() => onDelete(exp.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/add">Add Expense</Link></li>
          <li><Link to="/view">View Expenses</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;

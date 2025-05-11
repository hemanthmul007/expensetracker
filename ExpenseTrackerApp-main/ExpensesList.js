import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpensesList = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Function to fetch expenses from backend API
    const getExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/expenses');
            setExpenses(response.data);
            setLoading(false);
        } catch (err) {
            setError('Error fetching expenses');
            setLoading(false);
        }
    };

    // Fetch expenses when the component is mounted
    useEffect(() => {
        getExpenses();
    }, []);

    return (
        <div>
            <h1>Expenses</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            {expense.name} - ${expense.amount} on {expense.date}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpensesList;

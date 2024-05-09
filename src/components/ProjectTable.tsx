import React from 'react'

interface Expense {
    id: number,
    description: string,
    amount: number,
    catagory: string
}

interface Props {
    expenses: Expense[]
    onDelete: (id: number) => void
}


function ProjectTable({ expenses, onDelete }: Props) {
    return (
        <table className=" text-center table table-bordered container my-4">
            <thead>
                <tr>

                    <th scope="col">No#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Catagory</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>

                {expenses.map(expense =>
                    <tr key={expense.id}>
                        <th scope="row">{expense.id}</th>
                        <td>{expense.description}</td>
                        <td>${expense.amount}</td>
                        <td>{expense.catagory}</td>
                        <td>
                            <button
                                onClick={() =>
                                    onDelete(expense.id)}
                                className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td>--</td>
                    <th scope="row">Total</th>
                    <td>${expenses.reduce((acc, expense) =>
                        acc + expense.amount, 0
                    ).toFixed(2)}</td>
                    <td>--</td>
                    <td>--</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ProjectTable

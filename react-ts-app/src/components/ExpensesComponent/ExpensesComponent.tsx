import { formatClassList } from "../../shared/utils/common/styles"
import { Grid } from "../../shared/ressources/common/Grid/Grid";
import { Card } from "../../shared/ressources/common/Card/Card";
import "./ExpensesComponent.css";
import Expenses from "./ExpensesData";
import { useState } from "react";
import { Form } from "../../shared/ressources/common/Form/Form";
import { Filter } from "../../shared/ressources/common/Filter/Filter";

export const ExpensesComponent = (props: any) => {
    const [filtered, setFiltered] = useState(false);
    const [expenses, setGridData] = useState(props.expensesData);
    const [filteredExtenses, setFilteredExtenses] = useState(expenses);

    const filterChangeHandler = (selectedYear: string) => {
        setFilteredExtenses(expenses.filter((expense: Expenses) => (expense.date.getFullYear().toString() === selectedYear)));
        setFiltered(true);
    }

    const passData = (data: any) => {
        setGridData(() => {
            return [{
                id: Math.random(),
                title: data.title.value,
                amount: data.amount.value,
                date: new Date(data.date.value),
            }, ...expenses]
        });
        setFiltered(false);
    }

    const classList = [''];
    return (
        <div className="expenses">
            <div className="controls-grid">
                <div className="grid-item">
                    <Form passData={passData}>
                        <h2>Add expenses</h2>
                        <div className="input-row">
                            <label>Expense name :</label>
                            <input type="text" name="title" required />
                        </div>
                        <div className="input-row">
                            <label>Expense amount :</label>
                            <input type="number" name="amount" required />
                        </div>
                        <div className="input-row">
                            <label>Expense date :</label>
                            <input type="date" name="date" required />
                        </div>
                        <input type="submit" value="Ajouter" className="submitButton" />
                    </Form>
                </div>

                <div className="grid-item">
                    <h2>Filters</h2>
                    <div className="input-row mt-7">
                        <label>Expense date :</label>
                        <div className="mt-5">
                            <Filter onChangeFilter={filterChangeHandler} />
                        </div>
                    </div>
                </div>
            </div>

            <h1>Expences list</h1>
            <Grid>
                {
                    filtered ?
                        filteredExtenses.map((expense: Expenses) => (
                            <Card key={expense.id}>
                                <h2>{expense.title}</h2>
                                <span>Amount : {expense.amount}€</span>
                                <span>Date : {expense.date.toDateString()}</span>
                            </Card>
                        )) :
                        expenses.map((expense: Expenses) => (
                            <Card key={expense.id}>
                                <h2>{expense.title}</h2>
                                <span>Amount : {expense.amount}€</span>
                                <span>Date : {expense.date.toDateString()}</span>
                            </Card>
                        ))
                }
            </Grid>
        </div>
    )
}
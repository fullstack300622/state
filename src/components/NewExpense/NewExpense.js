import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {


    const onNewExpenseSubmitHandler = (data) => {
        props.onNewExpense({
            ...data,
            id: Math.random().toString(),
            date: new Date(data.date)
        });
    }

    return (
        <div>
            <NewExpenseForm onNewExpenseSubmit={onNewExpenseSubmitHandler} />
        </div>
    )
}

export default NewExpense;
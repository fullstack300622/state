import { useState } from 'react';


const NewExpenseForm = (props) => {
    
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const inputTitleHandler = (e) => {        
        setInputTitle(e.target.value)
    }

    const inputAmountHandler = (e) => {        
        setInputAmount(e.target.value)
    }

    const inputDateHandler = (e) => {        
        setInputDate(e.target.value)
    }

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '20',
    //     date: '10/10/2022'
    // })

    // const inputTitleHandler = (e) => {        
    //     // e.target.value
    //     setUserInput((prevState)=>{
    //         return({
    //             ...prevState,
    //             title: e.target.value
    //         })
    //     })
    // }

    // const inputAmountHandler = (e) => {                
    // }

    // const inputDateHandler = (e) => {                
    // }

    const onSubmitHandler=(e)=>{
        e.preventDefault();

        //here we can send state up^
         props.onNewExpenseSubmit({        
            title: inputTitle,
            amount: inputAmount,
            date: inputDate,
          });

         setInputTitle('');
         setInputAmount('');
         setInputDate('');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label style={{ color: 'white' }}>Title</label>
                <input type="text" onChange={inputTitleHandler} value={inputTitle} />
                <p style={{
                    color: "white"
                }}>title: {inputTitle}</p>

            </div>
            <div>
                <label style={{ color: 'white' }}>Amount</label>
                <input type="number" onChange={inputAmountHandler} value={inputAmount}/>
                <p style={{
                    color: "white"
                }}>Amount: {inputAmount}</p>
            </div>
            <div>
                <label style={{ color: 'white' }}>Date</label>
                <input type="date" onChange={inputDateHandler} value={inputDate}/>
                <p style={{
                    color: "white"
                }}>Date: {inputDate}</p>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    )
}


export default NewExpenseForm;
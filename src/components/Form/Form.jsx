import React, { useState } from "react";
import axios from 'axios';
import App from "../App/App";
function Form({getGroceryList}) {
    // Input Variables
    let [item, setItem] = useState('');
    let [url, SetUrl] = useState('');
    let [quantity, SetQuantity] = useState('');
    let [unit, SetUnit] = useState('');

    // POST
    const addGroceryItem = (event) => {
        event.preventDefault();
        console.log('in POST');
        //const grocery = {item, url, unit, quantity}
        axios.post('/api/groceries', {name: item,displayImage: url,unit: unit,quantity: quantity}).then((response) => {
            setItem('');
            SetUrl('');
            SetQuantity('');
            SetUnit('');
            getGroceryList();
        }).catch((error) => {
            console.log('Error:', error);
            alert('Something went wrong!')
        })
    }

    return(
        <div>
            <h2>Add an item</h2>
            <form onSubmit={(e) => {addGroceryItem(e)}}>
                <input type="text" placeholder="Item" onChange={e => {setItem(e.target.value)}}></input>
                <input type="text" placeholder="URL" onChange={e => {SetUrl(e.target.value)}}></input>
                <br />
                <input type="text" placeholder="Quantity" onChange={e => {SetQuantity(e.target.value)}}></input>
                <input type="text" placeholder="Unit" onChange={e => {SetUnit(e.target.value)}}></input>
                <br />
                <input type="submit" value="Add"></input>
            </form>
        </div>
    );
}

export default Form;
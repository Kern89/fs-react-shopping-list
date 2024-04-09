import React, {useState} from 'react';
import Header from '../Header/Header.jsx';
import Form from '../Form/Form.jsx';
import List from '../List/List.jsx';
import axios from 'axios';
import './App.css';


function App() {
    // List array
    const [itemList, setItemList] = useState([]);
    // GET
    const getGroceryList = () => {
        axios.get('/api/groceries').then((response) => {
            setItemList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    };
    // PUT
    const resetList = () => {
        axios.put('/api/groceries/renew/list').then((response) => {
            console.log('grina');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    };
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            <Form getGroceryList={getGroceryList} />
            <h2>Shopping List</h2>
            <button onClick={() => resetList()}>Something Special</button>
            <List getGroceryList={getGroceryList} itemList={itemList} />
            </main>
        </div>
    );
}

export default App;

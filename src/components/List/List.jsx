import React from 'react';
import './List.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
function List({getGroceryList, itemList}) {
    // useEffect called on page load
    useEffect(() => {
        console.log();
        getGroceryList();
    }, []);
    // DELETE
    const removeListItem = (id) => {
        console.log('remove item:', id);
        axios.delete(`/api/groceries/${id}`).then((response) => {
            getGroceryList();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }
    // PUT
    const buyItem = (id) => {
        console.log('buy:', id);
        axios.put(`/api/groceries/${id}`).then((response) => {
            getGroceryList();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    };
    return (
        <div>
            {
            itemList.map((item) => (
                item.purchased == "FALSE" ?
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    {item.displayImage ? (
                        <img src={item.displayImage} alt={item.name} />
                    ) : (
                        <div className='no-image'>
                            <span>No Image</span>
                        </div>
                    )}
                    <h4>{item.quantity}{item.unit}</h4>
                    <div>
                        <button onClick={() => buyItem(item.id)}>Buy</button>
                        <button onClick={() => removeListItem(item.id)}>Remove</button>
                    </div>
                </div> : 
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    {item.displayImage ? (
                        <img src={item.displayImage} alt={item.name} />
                    ) : (
                        <div className='no-image'>
                        <span>No Image</span>
                        </div>
                    )}
                    <h4>{item.quantity}{item.unit}</h4>
                    <div>
                        <button onClick={() => unbuyItem(item.id)}>Buy</button>
                        <button onClick={() => removeListItem(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div> 
    )
}

export default List;
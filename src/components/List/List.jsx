import React from 'react';
import './List.css';

function List() {
    // List array
    const itemList = [];
    // GET
    
    // DELETE

    // PUT

    // ToDo: hidden buttons

    return (
        <div>
            {itemList.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    {item.displayImage ? (
                        <img src={item.displayImage} alt={item.name} />
                    ) : (
                        <div className='no-image'>
                            <span>No Image</span>
                        </div>
                    )}
                    <div>
                        <button onClick={}>Buy</button>
                        <button onClick={}>Remove</button>
                    </div>
                </div>
            ))}
        </div> 
    )
}